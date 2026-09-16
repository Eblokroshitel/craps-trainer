const minBet = 5;
const maxBet = 100;

const betAmountElement = document.querySelector("#betAmount");
const betNameElement = document.querySelector("#betName");

const die1Element = document.querySelector("#die1");
const die2Element = document.querySelector("#die2");

const propBetType = document.querySelector("#propBetType");


const propBets = {
    hornBet: "Horn Bet",
    hornHigh: "Horn High's",
    cAndE: "C & E",
    worldBet: "World Bet",
    any7: "Any 7",
    anyCraps: "Any Craps",

};


const winningRolls = {
    hornBet: [2, 3, 11, 12],
    hornHigh: [2, 3, 11, 12],
    cAndE:[2, 3, 12, 11],
    worldBet:[2, 3, 11, 12, 7],
    any7: [7],
    anyCraps: [2, 3, 12]

};


const hornHighNumbers = [2, 3, 11, 12];


function randomItem(array) {
    return array[
        Math.floor(Math.random() * array.length)
    ];
}


function diceForRoll(total) {

    const combinations = {

        2: [[1, 1]],

        3: [
            [1, 2],
            [2, 1]
        ],

        7: [
            [1, 6],
            [2, 5],
            [3, 4],
            [4, 3],
            [5, 2],
            [6, 1]
        ],

        11: [
            [5, 6],
            [6, 5]
        ],

        12: [[6, 6]]
    };

    return randomItem(combinations[total]);
}


function randomBet(min, max, betName) {

    let divisor;

    if (betName === "Horn Bet") {
        divisor = 4;
    } else {
        divisor = 5;
    }

    const firstBet =
        Math.ceil(min / divisor) * divisor;

    const lastBet =
        Math.floor(max / divisor) * divisor;

    const numberOfBets =
        (lastBet - firstBet) / divisor;

    const randomStep =
        Math.floor(
            Math.random() * (numberOfBets + 1)
        );

    return firstBet + randomStep * divisor;
}


// Главное состояние текущего вопроса
export let currentQuestion = null;


export function generateQuestion() {

    const betKey = propBetType.value;

    const betName = propBets[betKey];

    const possibleRolls =
        winningRolls[betKey];

    const roll =
        randomItem(possibleRolls);

    const [die1, die2] =
        diceForRoll(roll);

    const amount =
        randomBet(
            minBet,
            maxBet,
            betName
        );


    const question = {
        amount,
        betName,
        roll,
        die1,
        die2
    };


    // Если выбран Horn High
    if (betName === "Horn High's") {

        question.hornHighNumber =
            randomItem(hornHighNumbers);
    }


    return question;
}


export function showQuestion() {

    currentQuestion =
        generateQuestion();


    betAmountElement.textContent =
        `$${currentQuestion.amount}`;


    if (currentQuestion.betName === "Horn High's") {

        betNameElement.textContent =
            `Horn High ${currentQuestion.hornHighNumber}`;

    } else {

        betNameElement.textContent =
            currentQuestion.betName;
    }


    die1Element.dataset.value =
        currentQuestion.die1;

    die2Element.dataset.value =
        currentQuestion.die2;
}


// Когда пользователь меняет ставку
propBetType.addEventListener(
    "change",
    showQuestion
);


// Первый вопрос при загрузке страницы
showQuestion();