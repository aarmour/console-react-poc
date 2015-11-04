#!/bin/bash

rm -rf lib
mkdir -p lib
node_modules/.bin/babel ./src -d lib --ignore '__tests__'
cd ./src && find . -name '*.css' | cpio -pdm ../lib

