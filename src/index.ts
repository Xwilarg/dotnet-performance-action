import * as core from '@actions/core';
import { readFileSync } from 'fs';

async function run() {
    try {
        const data = readFileSync(core.getInput('performance-report'), "utf-8").replace(/\r\n/g,'\n').split('\n');
        for (let index in data)
        {
            if (data[index] === "") {
                continue;
            }
            const elems = data[index].split(',');
            const method = elems[0];
            const mean = elems[42];
            const error = elems[43];
            const stddev = elems[44];
            console.log(`${method} | ${mean} | ${error} | ${stddev}`);
        }
    } 
    catch (error) {
        core.setFailed(error.message);
    }
}

run()