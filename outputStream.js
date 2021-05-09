const fs = require("fs");

exports.outputStream = filename => {
  if (filename) {
    if (fs.existsSync(filename)) {
      return fs.createWriteStream(filename);
    } else {
      console.error("Output file does not exist");
      process.exit(9);
    }
  }

  return process.stdout;
}