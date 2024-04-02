import chalk from "chalk";

/**
 * @typedef {function(string)} LogMessage
 */

/** @type {LogMessage} */
export function log(msg) {
  console.log(msg);
}

/** @type {LogMessage} */
log.error = (msg) => {
  console.log(
    chalk.red(msg)
  );
}

/** @type {LogMessage} */
log.success = (msg) => {
  console.log(
    chalk.green(msg)
  );
}

/** @type {LogMessage} */
log.warn = (msg) => {
  console.log(
    chalk.yellow(msg)
  );
}
