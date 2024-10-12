// Quiz data
const quizData = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Sukkur", "Islamabad", "Lahore", "Karachi"],
        answer: 1
    },
    {
        question: "Who is the current Prime Minister of Pakistan?",
        options: ["Shehbaz Shareef ", "Imran Khan", "Altaf Hussain", "Asif Muneer"],
        answer: 0
    },
    {
        question: "Who is the greatest football player of all time?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar Junior", "Kylian Mbappe"],
        answer: 2
    }
];

// Initialize variables
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// Display first question
displayQuestion();

// Event listeners
document.querySelectorAll('.option').forEach((option) => {
    option.addEventListener('click', () => {
        selectedAnswer = option.textContent;
        document.querySelectorAll('.option').forEach((opt) => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

document.querySelector('.submit').addEventListener('click', checkAnswer);
document.querySelector('.next').addEventListener('click', nextQuestion);

// Functions
function displayQuestion() {
    const questionElement = document.querySelector('.question');
    const optionsElement = document.querySelector('.options');
    questionElement.textContent = quizData[currentQuestion].question;

    quizData[currentQuestion].options.forEach((option, index) => {
        const optionElement = optionsElement.children[index];
        optionElement.textContent = option;
    });

    document.querySelector('.result').textContent = '';
    document.querySelector('.submit').style.display = 'block';
    document.querySelector('.next').style.display = 'none';
    selectedAnswer = null;
}

function checkAnswer() {
    if (selectedAnswer === quizData[currentQuestion].options[quizData[currentQuestion].answer]) {
        score++;
        document.querySelector('.result').textContent = `Correct! Your score is ${score} out of ${currentQuestion + 1}.`;
    } else {
        document.querySelector('.result').textContent = `Incorrect. The correct answer is ${quizData[currentQuestion].options[quizData[currentQuestion].answer]}. Your score is ${score} out of ${currentQuestion + 1}.`;
    }

    document.querySelector('.submit').style.display = 'none';
    document.querySelector('.next').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
        document.querySelector('.question').textContent = 'Quiz completed!';
        document.querySelector('.options').style.display = 'none';
        document.querySelector('.result').textContent = `Your final score is ${score} out of ${quizData.length}.`;
        document.querySelector('.next').style.display = 'none';
    } else {
        displayQuestion();
    }
}