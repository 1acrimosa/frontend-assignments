const quizData = [
    {
        question: "What is the capital city of France?",
        options: {
            A: "Astana",
            B: "Paris",
            C: "London"
        },
        correctAnswer: "B"
    },
    // Add more questions here
    {
        question: "Smartest?",
        options: {
            A: "Patrick",
            B: "Albert Einstein",
            C: "Sponge Bob"
        },
        correctAnswer: "B"
    },
    {
        question: "5 + 5 = ?",
        options: {
            A: "10",
            B: "55",
            C: "21"
        },
        correctAnswer: "A",
    },
    {
        question: "Red + Yellow?",
        options: {
            A: "Blue",
            B: "Orange",
            C: "Purple"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the capital city of America?",
        options: {
            A: "New York",
            B: "Washington",
            C: "California"
        },
        correctAnswer: "B"
    },
    // I guess 5 questions are enough
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    if (currentQuestion >= quizData.length) {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        return;
    }

    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = "";

    for (const option in quizData[currentQuestion].options) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = option;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(quizData[currentQuestion].options[option]));

        optionsElement.appendChild(label);
    }
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", checkAnswer);

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        if (selectedOption.value === quizData[currentQuestion].correctAnswer) {
            score++;
        }
        currentQuestion++;
        loadQuestion();
    }

    const feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = `Score: ${score}`;

    const total = document.getElementById("totalQ");
    total.textContent = currentQuestion + " / " + quizData.length;

    if (currentQuestion >= quizData.length) {
        feedbackElement.textContent = `Quiz Completed! Your Score: ${score}`;

        setTimeout(function () {
            location.reload();
        }, 2500);

        alert(`Quiz Completed! Your Score: ${score}`)
    }
}

window.addEventListener("load", loadQuestion);
