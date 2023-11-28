const prompt=require("prompt-sync")({sigint:true});

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const text = 'The quick brown fox jumps over the lazy dog';
const longest = findLongestWord(text);
console.log(`The longest word is: "${longest}"`);
