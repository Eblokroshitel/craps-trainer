function trueOdds(amount, point) {
    const payouts = {
        4: 2,
        5: 3/2,
        6: 6/5,
        8: 6/5,
        9: 3/2,
        10: 2
    };

    return amount * (payouts[point] || 0);
}


export function layOdds(amount, point) {
    const payouts = {
        4: 1/2,
        5: 2/3,
        6: 5/6,
        8: 5/6,
        9: 2/3,
        10: 1/2
    };

    return amount * (payouts[point] || 0);
}