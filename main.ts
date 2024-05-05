// Import inquirer
import inquirer from 'inquirer';

// Define types for user input
interface UserInput {
    from: "PKR" | "GBP" | "USD";
    to: "PKR" | "GBP" | "USD";
    amount: number;
}

// Currency conversions object
let currencyconver = { 
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0029,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.24,
        "GBP": 1,
        "PKR": 343.48
    },
    "USD": {
        "USD": 1,
        "GBP": 0.81,
        "PKR": 277.69,   
    },
}

// Prompt user for input
const answer: UserInput = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "From",
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "list",
        name: "to",
        message: "Please select your conversion rate",
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter the amount you want to convert",
    },
]);

// Destructuring user input
const { from, to, amount } = answer;

// Perform currency conversion
if (from && to && amount){
    let result = currencyconver[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
} else { 
    console.log(`Invalid conversion`);
}
