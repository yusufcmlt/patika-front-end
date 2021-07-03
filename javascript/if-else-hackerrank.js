"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const N = parseInt(readLine(), 10);
  if (N % 2 !== 0) {
    console.log("Weird");
  } else if (N % 2 == 0 && N >= 2 && N <= 5) {
    console.log("Not Weird");
  } else if (N % 2 == 0 && N >= 6 && N <= 20) {
    console.log("Weird");
  } else if (N % 2 == 0 && N > 20) {
    console.log("Not Weird");
  } else {
    console.log(
      N >= 2 && N <= 5 ? "Not Weird" : N >= 6 && N <= 20 ? "Weird" : "Not Weird"
    );
  }
}
