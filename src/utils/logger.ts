import chalk from 'chalk';

// this will define a proper toJSON function on the standard Error object prototype
// and thus will allow it to be JSON.stringify-ed properly
if (!('toJSON' in Error.prototype))
  Object.defineProperty(Error.prototype, 'toJSON', {
    value: function () {
      const alt = {};

      Object.getOwnPropertyNames(this).forEach(function (key) {
        alt[key] = this[key];
      }, this);

      return alt;
    },
    configurable: true,
    writable: true
  });

export const { log, error } = console;

export function logDanger(content: string): void {
  log(chalk.red.bold(content));
}

export function logWarning(content: string): void {
  log(chalk.yellow.bold(content));
}

export function logSuccess(content: string): void {
  log(chalk.green.bold(content));
}

export function logPrimary(content: string): void {
  log(chalk.blue.bold(content));
}

export function logConsole(content: unknown): void {
  log(content);
}

