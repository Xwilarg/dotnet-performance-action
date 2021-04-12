#!/bin/sh -l

export IFS=";"

dotnet tool install -g BenchmarkDotNet.Tool
cd $(ls -d */|head -n 1)
dotnet run -c Release -- --filter *Sum* --keepfiles
cd BenchmarkDotNet.Artifacts/results
cat $(ls *.csv | head -n 1) | while read method b c d e f g h i j k l m n o p q r s t u v w x y z aa ab ac ad ae af ag ah ai aj ak al am an ao ap mean error stddev;
do
    echo -e "$method | $mean | $error | $stddev\n"
done