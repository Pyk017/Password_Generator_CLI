const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (password, filename = "passwords.txt") => {
  fs.open(path.join(__dirname, "../", filename), "a", 666, (e, id) => {
    fs.write(id, password + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.greenBright(`Password is Saved to ${filename}`));
      });
    });
  });
};

module.exports = savePassword;
