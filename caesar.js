const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = alphabet.toUpperCase();

exports.ceasar = (text, shift) => {
  const map = Array.prototype.map;
  return map.call(text, char => {
    if (alphabet.includes(char)) {
      let position = (alphabet.indexOf(char) + shift) % alphabet.length;
      position = position < 0 ? alphabet.length + position : position
      return alphabet[position];
    }
    if (alphabetUpper.includes(char)) {
      let position = (alphabetUpper.indexOf(char) + shift) % alphabetUpper.length;
      position = position < 0 ? alphabetUpper.length + position : position
      return alphabetUpper[position];
    }
    return char;
  }).join('');
}