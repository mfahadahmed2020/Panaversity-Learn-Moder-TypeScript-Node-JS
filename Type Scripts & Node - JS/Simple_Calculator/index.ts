// # ! /USR/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "SecondNumber" },
    { message: "Select One of Operators to Perform Action", type: "list", name: "Operator", choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"] },
]);

// CONDITIONAL STATEMENT
if (answer.Operator === "ADDITION") {
    console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.Operator === "SUBTRACTION") {
    console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.Operator === "MULTIPLICATION") {
    console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.Operator === "DIVISION") {
    console.log(answer.FirstNumber / answer.SecondNumber);
} else {
    console.log("Please Select Correct Operator");
}