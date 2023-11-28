const prompt=require("prompt-sync")({sigint:true});

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const number = parseInt(prompt("Write number: "));
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
