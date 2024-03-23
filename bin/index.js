#!/usr/bin/env node
import yargs from 'yargs';
import chalk from 'chalk';
import boxen from 'boxen';
import {initRepo, getSecrets, insertSecrets} from './repository.js';
import { generateTxt } from './service.js';

initRepo();

const usage = chalk.bgGreen(boxen('SECRET-WARS'))
+ "\n Manage your secrets and password";

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
    .option("w", {
      alias: "write",
      describe: "Write all your secrets to a txt file",
      type: "boolean",
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

if(arg.l && arg.r == null && arg.w == null) {
    getSecrets();
}

if(arg.r && arg.l == null && arg.w == null) {
  insertSecrets(arg.r);
}

if(arg.w && arg.l == null && arg.r == null) {
  generateTxt();
}