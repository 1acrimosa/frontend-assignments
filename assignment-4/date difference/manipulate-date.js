const prompt=require("prompt-sync")({sigint:true});

function addDaysToDate(date, days) {
    const resultDate = new Date(date);
    resultDate.setDate(resultDate.getDate() + days);
    return resultDate;
}

// Example usage:
const originalDate = new Date(prompt("Date : "));
const daysToAdd = parseInt(prompt("How much day to add : "));
const newDate = addDaysToDate(originalDate, daysToAdd);
console.log(`New date after adding ${daysToAdd} days: ${newDate.toISOString().slice(0, 10)}`);
