/// HORN BET /// 

export function hornBet(amount, roll) {
    const payouts = {
        2: 27/4,
        3: 3,
        11: 3,
        12: 27/4
    };

    return amount * (payouts[roll] || 0);
}


/// HORN HIGH BET ///

export function hornHigh(highNumber, amount, roll) {

    const payouts = {
        2: {
            2: 57 / 5,
            3: 11 / 5,
            11: 11 / 5,
            12: 26 / 5
        },

        3: {
            2: 26 / 5,
            3: 27 / 5,
            11: 11 / 5,
            12: 26 / 5
        },

        11: {
            2: 26 / 5,
            3: 11 / 5,
            11: 27 / 5,
            12: 26 / 5
        },

        12: {
            2: 26 / 5,
            3: 11 / 5,
            11: 11 / 5,
            12: 57 / 5
        }
    };

    return amount * (payouts[highNumber][roll] || 0);
}



/// C&E BET ///

export function cAndE(amount, roll) {
    const payouts = {
        2: 3,
        3: 3,
        11: 7,
        12: 3
    };
    return amount * (payouts[roll] || 0);
}

/// ANY CRAPS BET ///

export function anyCraps(amount) {
    return amount * 7;
}

/// ANY SEVEN BET ///

export function anySeven(amount) {
    return amount * 4;
}


///WORLD BET
export function worldBet(amount, roll){
    const payouts = {
        2: 26/5,
        3: 11/5,
        11: 11/5,
        12: 26/5,
        7: 0
    }

    return amount * (payouts[roll] || 0);
}