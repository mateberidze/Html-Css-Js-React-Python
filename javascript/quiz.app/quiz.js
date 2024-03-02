const quizData = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "London",
            b: "Paris",
            c: "Berlin"
        },
        correctAnswer: "b"
    },
    {
question: "What is 2 + 2?",
        answers: {
            a: "3",
            b: "4",
            c: "5"
        },
        correctAnswer: "b"
    },
    // Add more questions here
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];

    quizData.forEach((questionData, questionIndex) => {
        const answers = [];

        for (const option in questionData.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionIndex}" value="${option}">
                    ${option}: ${questionData.answers[option]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${questionData.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;

    quizData.forEach((questionData, questionIndex) => {
        const answerContainer = answerContainers[questionIndex];
        const selector = `input[name=question${questionIndex}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === questionData.correctAnswer) {
            score++;
            answerContainers[questionIndex].style.color = 'lightgreen';
        } else {
            answerContainers[questionIndex].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
