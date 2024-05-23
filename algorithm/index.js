function reverseAlphabet(str) {
  return str.replace(/[a-zA-Z]+/gm, function (item) {
    return item.split("").reverse().join("");
  });
}

function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return `${longest}: ${longest.length} character`;
}

function count(INPUT, QUERY) {
  const occurrences = [];

  for (const query of QUERY) {
    let count = 0;
    for (const word of INPUT) {
      if (word === query) {
        count++;
      }
    }
    occurrences.push(count);
  }

  return occurrences;
}

function subtractDiagonals(matrix) {
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    diagonal1 += matrix[i][i];
    diagonal2 += matrix[i][matrix.length - 1 - i];
  }

  return diagonal1 - diagonal2;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(reverseAlphabet("NEGIE1"));
console.log(longestWord(sentence));
console.log(count(INPUT, QUERY));
console.log(subtractDiagonals(matrix));
