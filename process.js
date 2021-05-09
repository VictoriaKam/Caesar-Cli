const { pipeline } = require("stream");

const { inputStream } = require("./inputStream");
const { outputStream } = require("./outputStream");
const { transformStream } = require("./transformStream");

exports.process = (shift, action, input, output) => {
  if (!action || !shift) {
    console.error("Action and shift are required");
    process.exit(9);
  }

  shift = action === "encode" ? shift * 1 : shift * -1;

  pipeline(
    inputStream(input),
    transformStream(shift),
    outputStream(output),
    e => {
      if (e) {
        console.error("Something went wrong", e);
        process.exit(9)
      }
    }
  );
}