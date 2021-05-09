const { Command } = require("commander");

const { process } = require("./process");

const program = new Command();
program
  .storeOptionsAsProperties(false)
  .version("0.0.1")
  .option("-s, --shift <type>", "a shift", value => value)
  .option("-i, --input <type>", "an input file", value => value)
  .option("-o, --output <type>", "an output file", value => value)
  .option("-a, --action <type>", "an action encode/decode", value => value)
  .action(() => {
    const { action, shift, input, output } = program.opts();
    process(
      shift,
      action,
      input,
      output
    )
  })
  .parse(process.argv)