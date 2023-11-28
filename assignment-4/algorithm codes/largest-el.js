const prompt=require("prompt-sync")({sigint:true});

function findLargestElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

const numbers = [5, 2, 9, 1, 5, 6];
const largestNumber = findLargestElement(numbers);
console.log(`The largest number is: ${largestNumber}`);
