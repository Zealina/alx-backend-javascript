const process = require("node:process");

function displayMessage(string) {
  process.stdout.write(string + '\n');
}
module.exports = displayMessage;
