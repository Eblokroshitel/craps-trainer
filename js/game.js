import {
    currentQuestion,
    showQuestion
} from "./question.js";

import {
    hornBet,
    anySeven,
    hornHigh,
    cAndE,
    worldBet,
    anyCraps
} from "./prop_bets.js";


const answerInput = document.querySelector("#answer");
const checkButton = document.querySelector("#checkAnswer");

const correctCountElement =
    document.querySelector("#correctCount");

const wrongCountElement =
    document.querySelector("#wrongCount");

const accuracyElement =
    document.querySelector("#accuracy");

const feedback =
    document.querySelector("#feedback");

const feedbackTitle =
    document.querySelector("#feedbackTitle");

const feedbackText =
    document.querySelector("#feedbackText");


let correctCount = 0;
let wrongCount = 0;
let totalCount = 0;


function getCorrectAnswer() {

    switch (currentQuestion.betName) {

        case "Horn Bet":
            return hornBet(
                currentQuestion.amount,
                currentQuestion.roll
            );


        case "Horn High's":
            return hornHigh(
                currentQuestion.hornHighNumber,
                currentQuestion.amount,
                currentQuestion.roll
            );
        
        case "C & E":
            return cAndE(
                currentQuestion.amount,
                currentQuestion.roll
            );

        case "World Bet":
            return worldBet(
                currentQuestion.amount,
                currentQuestion.roll
            );

        case "Any 7":
            return anySeven(
                currentQuestion.amount
            );

        case "Any Craps":
            return anyCraps(
                currentQuestion.amount
            )


        default:
            throw new Error(
                `Unknown bet: ${currentQuestion.betName}`
            );
    }
}


function checkAnswer() {

    const userAnswer =
        Number(answerInput.value);

    const correctAnswer =
        getCorrectAnswer();


    if (
        Math.abs(userAnswer - correctAnswer) < 0.01
    ) {

        feedbackTitle.textContent =
            "Correct!";

        feedbackText.textContent =
            `$${correctAnswer.toFixed(2)}`;

        correctCount++;

        correctCountElement.textContent =
            correctCount;

    } else {

        feedbackTitle.textContent =
            "Wrong";

        feedbackText.textContent =
            `Correct answer: $${correctAnswer.toFixed(2)}`;

        wrongCount++;

        wrongCountElement.textContent =
            wrongCount;
    }


    feedback.classList.remove("hidden");

    answerInput.value = "";


    totalCount++;

    const accuracy =
        (correctCount / totalCount) * 100;

    accuracyElement.textContent =
        `${accuracy.toFixed(2)}%`;


    showQuestion();
}


checkButton.addEventListener(
    "click",
    checkAnswer
);