const prompt=require("prompt-sync")({sigint:true});

function hasDuplicates(arr) {
    const seen = {};

    for (const item of arr) {
        if (seen[item]) {
            return true;
        }
        seen[item] = true;
    }

    return false;
}

// Example usage:
const values = [1, 2, 3, 4, 5, 99];
const hasDupes = hasDuplicates(values);
console.log(`Contains duplicates: ${hasDupes}`);
