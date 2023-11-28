const prompt=require("prompt-sync")({sigint:true});

function dateDifferenceInDays(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const diffMilliseconds = Math.abs(date1 - date2);
    const diffDays = Math.floor(diffMilliseconds / oneDay);
    return diffDays;
}

const date1 = new Date(prompt("write date, (ex:2023-01-01): "));
const date2 = new Date(prompt("write date, (ex:2023-01-26): "));
const differenceInDays = dateDifferenceInDays(date1, date2);
console.log(`Difference in days: ${differenceInDays}`);
