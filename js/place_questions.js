const points = [4, 5, 6, 8, 9, 10];

const minBet = 5;
const maxBet = 100;


function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function randomBet(min, max, point) {
    let divisor;

    if (point === 6 || point === 8) {
        divisor = 6;
    } else {
        divisor = 5;
    }

    const firstBet = Math.ceil(min / divisor) * divisor;
    const lastBet = Math.floor(max / divisor) * divisor;

    const numberOfBets = (lastBet - firstBet) / divisor;
    const randomStep = Math.floor(Math.random() * (numberOfBets + 1));

    return firstBet + randomStep * divisor;
}


export function generatePlaceQuestion() {
    const point = randomItem(points);
    const amount = randomBet(minBet, maxBet, point);

    return {
        category: "place",
        betKey: `place${point}`,
        betName: `Place ${point}`,
        amount,
        point
    };
}