const prompt=require("prompt-sync")({sigint:true});

function arrayOperations() {
    const inputArray = [];

    const count = parseInt(prompt("Enter the number of values: "));

    const inputValues = prompt("Enter the values separated by spaces: ").split(" ");

    if (inputValues.length !== count) {
        console.log('Invalid input. Number of values entered does not match the specified count.');
        return;
    }

    for (let i = 0; i < count; i++) {
        const value = parseFloat(inputValues[i]);

        if (isNaN(value)) {
            console.log('Invalid input. Please enter valid numeric values.');
            return;
        }

        inputArray.push(value);
    }

    const sum = inputArray.reduce((acc, current) => acc + current, 0);
    const average = sum / count;
    const max = Math.max(...inputArray);
    const min = Math.min(...inputArray);

    const result = {
        sum: sum,
        average: average,
        max: max,
        min: min
    };

    console.log(result);
}

arrayOperations();
