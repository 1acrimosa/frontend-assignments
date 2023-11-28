const prompt=require("prompt-sync")({sigint:true});

function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.charAt(i);
    }
    return reversedStr;
}

const originalString = prompt();
const reversed = reverseString(originalString);
console.log(reversed);
