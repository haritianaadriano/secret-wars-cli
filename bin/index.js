#!/usr/bin/env node
import yargs from 'yargs';
import chalk from 'chalk';
import boxen from 'boxen';
import { getSecrets, insertSecrets } from './repository.js';

const invalid_usage = chalk.red("Usage: enter valid arguments or run --help");

const usage = boxen('Secret-Wars');

const arg = yargs(process.argv)
    .option("l", {
        alias: "list",
        describe: "List all secret and password stored",
        type: "boolean",
        demandOption: false,
    })
    .option("r", {
        alias: "register",
        describe: "Register given parameters",
        type: "array",
        demandOption: false
    })
    .option('d', {
      alias: "delete",
      describe: "Delete given paramenters",
      type: "array",
      demandOption: false
    })
    .help(true)
    .usage(usage)
    .argv;

if(arg.d != null) {
  console.log("Coming soon...");
}

if(arg.l != null && arg.r == null) {
    getSecrets();
}

if(arg.r != null && arg.l == null) {
  insertSecrets(arg.r);
}