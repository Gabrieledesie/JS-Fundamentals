#!/usr/bin/env node

const { argv } = require('node:process');

const arg1 = process.argv[2];
const arg2 = process.argv[3];


const concatArgs = `${arg1} is ${arg2}`;

console.log(concatArgs);