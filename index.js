#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword.js");
const savePassword = require("./utils/savePassword.js");

program.version("1.0.0").description("Simple Random Password Generator");

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save the password")
  .option("-nn, --no-numbers", "neglect digits")
  .option("-ns, --no-symbols", "neglect symbols")

  .parse();

const { length, save, numbers, symbols } = program.opts();

/// Generate Passwords
const generatePassword = createPassword(length, numbers, symbols);

// Save password to file
if (save) {
  savePassword(generatePassword);
}

// Copy to clipboard
clipboardy.writeSync(generatePassword);

// Output Password
console.log(chalk.blue("Generated Password: ") + chalk.bold(generatePassword));
console.log(chalk.yellow("Generated Password copied to clipboard"));
