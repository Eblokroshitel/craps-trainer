const points = [4, 5, 6, 8, 9, 10];

const minBet = 5;
const maxBet = 100;

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomBet(min, max, point) {
    let divisor;

    if (point === 4 || point === 10) {
        divisor = 2;
    } else if (point === 5 || point === 9) {
        divisor = 3;
    } else {
        divisor = 6;
    }

    const firstBet = Math.ceil(min / divisor) * divisor;
    const lastBet = Math.floor(max / divisor) * divisor;

    const numberOfBets = (lastBet - firstBet) / divisor;
    const randomStep = Math.floor(Math.random() * (numberOfBets + 1));

    return firstBet + randomStep * divisor;
}

export function generateLayQuestion() {
    const point = randomItem(points);
    const amount = randomBet(minBet, maxBet, point);

    return {
        amount,
        point
    };
}