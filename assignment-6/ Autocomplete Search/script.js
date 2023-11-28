let availableWords = [
    // 'YouTube',
    // 'Twitter',
    // 'StackOverFlow',
    // 'How to center div',
    // 'Backend or Frontend?',
    // 'IS or CS?',
    // 'Why we need programming?',
    // 'Help to solve problem',
    // 'Best algorithm',
    // 'Best teacher?',
    // 'Indian youtubers',
    // 'Discrete math',
    // 'Calculus 1',
    // 'Calculus 2',
    // 'ChatGPT',
];

fetch('availableWords.json')
    .then(response => response.json())
    .then(data => {
        availableWords.push(...data);
    })
    .catch(error => console.error(error));

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");


inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableWords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length) {
        resultsBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
