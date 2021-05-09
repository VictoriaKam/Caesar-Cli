const { Transform } = require("stream");

const { ceasar } = require("./caesar");

exports.transformStream = (shift) => {
  return new Transform({
    transform(chunk, _encoding, callback) {
      this.push(ceasar(chunk.toString("utf8"), shift));
      callback();
    }
  })
}
