"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// # ! /USR/bin/env node
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "SecondNumber" },
    { message: "Select One of Operators to Perform Action", type: "list", name: "Operator", choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"] },
]);
// CONDITIONAL STATEMENT
if (answer.Operator === "ADDITION") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "SUBTRACTION") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "MULTIPLICATION") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operator === "DIVISION") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please Select Correct Operator");
}
