console.log("=== JS Operators & Control Flow Practice ===");
let first = 9;
let second = 2;

console.log("\nArithmetic:");
console.log("Sum:", first + second);
console.log("Difference:", first - second);
console.log("Product:", first * second);
console.log("Quotient:", first / second);
console.log("Remainder:", first % second);

let resultOne = 10 + 5 * 2;
let resultTwo = (10 + 5) * 2;
console.log("10 + 5 * 2 =", resultOne);
console.log("(10 + 5) * 2 =", resultTwo);

console.log("\nComparisons:");
let num = 7;
let textNum = "7";
let bigNum = 20;

console.log("== :", num == textNum);
console.log("=== :", num === textNum);
console.log("num < bigNum:", num < bigNum);
console.log("num >= 7:", num >= 7);

console.log("\nLogical:");
let hasID = true;
let over18 = false;

console.log("hasID && over18:", hasID && over18);
console.log("hasID || over18:", hasID || over18);
console.log("!over18:", !over18);

let personAge = 30;
console.log(
  "Working age:",
  personAge >= 18 && personAge <= 65
);

console.log("\nGrades:");
let points = 92;

if (points >= 90) {
  console.log("Grade: A");
} else if (points >= 80) {
  console.log("Grade: B");
} else if (points >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: Below C");
}

console.log("\nDay Check:");
let dayIndex = 1;

switch (dayIndex) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Unknown day");
}

document.getElementById("output").textContent =
  "Console demo complete. Check F12!";
