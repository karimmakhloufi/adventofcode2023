import fs from "fs";

let total = 0;

const dict = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

console.log(dict.indexOf("two"));

const allFileContents = fs.readFileSync("input", "utf-8");
// const allFileContents = fs.readFileSync("examples", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  console.log(`Line from file: ${line}`);
  if (line.length > 0) {
    let matches;
    matches = line.matchAll(
      /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g
    );
    matches = [...matches];
    console.log("matches ", matches);

    if (matches !== null && matches !== undefined) {
      let firstNumber;
      let secondNumber;
      const firstMatch = matches.at(0)?.at(1) as string;
      const secondMatch = matches.at(-1)?.at(1) as string;

      if ((firstMatch.length as number) > 1) {
        firstNumber = dict.indexOf(firstMatch).toString();
      } else {
        firstNumber = parseInt(firstMatch);
      }

      if ((secondMatch.length as number) > 1) {
        secondNumber = dict.indexOf(secondMatch).toString();
      } else {
        secondNumber = parseInt(secondMatch);
      }

      const number = `${firstNumber}${secondNumber}`;
      console.log("number: ", number);
      console.log("parsed number: ", parseInt(number));
      total = total + parseInt(number, 10);
    }
  }
});

console.log("result: ", total);
