#!/usr/bin/env node

const { argv } = require('node:process');

const arg = process.argv[2];

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}