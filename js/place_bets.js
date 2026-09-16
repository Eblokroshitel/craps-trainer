export function placeBetPayout(amount, point){
    const payouts = {
        4: 9/5,
        5: 7/5,
        6: 7/6,
        8: 7/6,
        9: 7/5,
        10: 9/5
    };

    return amount * (payouts[point] || 0);
}

