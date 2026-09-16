import { generateLayQuestion } from "./lay_odds_question.js";
import { layOdds } from "./odds.js";

const amountElement = document.querySelector(".amount");
const pointElement = document.querySelector(".number");

const answerInput = document.querySelector("#answer");
const checkButton = document.querySelector("#checkAnswer");

const feedback = document.querySelector("#feedback");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackText = document.querySelector("#feedbackText");

const correctCountElement = document.querySelector("#correctCount");
const wrongCountElement = document.querySelector("#wrongCount");
const accuracyElement = document.querySelector("#accuracy");

let currentQuestion;

let correctCount = 0;
let wrongCount = 0;
let totalCount = 0;

function showQuestion() {
    currentQuestion = generateLayQuestion();

    amountElement.textContent = `$${currentQuestion.amount}`;
    pointElement.textContent = currentQuestion.point;
}

checkButton.addEventListener("click", () => {
    const userAnswer = Number(answerInput.value);

    const correctAnswer = layOdds(
        currentQuestion.amount,
        currentQuestion.point
    );

    if (Math.abs(userAnswer - correctAnswer) < 0.01) {
        feedbackTitle.textContent = "Correct!";
        feedbackText.textContent = `$${correctAnswer.toFixed(2)}`;

        correctCount++;
        correctCountElement.textContent = correctCount;
    } else {
        feedbackTitle.textContent = "Wrong";
        feedbackText.textContent =
            `Correct answer: $${correctAnswer.toFixed(2)}`;

        wrongCount++;
        wrongCountElement.textContent = wrongCount;
    }

    feedback.classList.remove("hidden");

    totalCount++;

    const accuracy = (correctCount / totalCount) * 100;
    accuracyElement.textContent = `${accuracy.toFixed(2)}%`;

    answerInput.value = "";

    showQuestion();
});

showQuestion();