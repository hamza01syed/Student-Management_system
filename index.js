#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 90000 + 10000);
console.log(randomNumber);
let myBalance = 0;
let answer = await inquirer.prompt([{
        name: "students",
        type: "input",
        message: "Enter your name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return "please enter a non empty value";
            }
        }
    }, {
        name: "courses",
        type: "list",
        message: "select the course to enroll",
        choices: ["MS Office", "python", "javascript", "SEO",]
    }
]);
const tuitionFee = {
    "MS Office": 2000,
    "python": 4000,
    "javascript": 5000,
    "SEO": 3000
};
console.log(`\n Tuition fee: ${tuitionFee[answer.courses]}\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select your Payment method",
        choices: ["Bank Transfer", "Easypaisa", "JazzCash", "sadapay"]
    }, {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return "please enter amount";
            }
        }
    }
]);
console.log(`You select ${paymentType.payment} payment method`);
const tuitionFees = tuitionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tuitionFees === paymentAmount) {
    console.log(`Congratulations, You have Successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next",
            choices: ["View status", "Exit"]
        }
    ]);
    if (ans.select === "View status") {
        console.log(`\n*****status******`);
        console.log(`Student Name:${answer.students}`);
        console.log(`ID:${randomNumber}`);
        console.log(`Course:${answer.courses}`);
        console.log(`Tuition Fees paid${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("Exiting...");
    }
}
else {
    console.log("Invalid Amount Entered");
}
