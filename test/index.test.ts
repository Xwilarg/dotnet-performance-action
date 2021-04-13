import * as cp from 'child_process'
import * as path from 'path'
import { writeFileSync } from 'fs';

test("main test", () => {
    process.env['INPUT_PERFORMANCE-REPORT'] = './report.csv'; // Must be created with dotnet run -c Release -- --filter *Sum* --keepfiles
    const np = process.execPath;
    const ip = path.join(__dirname, '..', 'dist', 'index.js');
    const options: cp.ExecFileSyncOptions = {
        env: process.env
    };
    console.log(cp.execFileSync(np, [ip], options).toString())
})