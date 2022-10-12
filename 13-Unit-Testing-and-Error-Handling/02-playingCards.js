function solve(face, suit) {
    let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validCardSuits = ['S', 'H', 'D', 'C'];

    if (!validCardFaces.includes(face)) {
        throw new Error('Error');
    }

    if (!validCardSuits.includes(suit)) {
        throw new Error('Error');
    }



    switch (suit) {
        case 'S':
            suit = '\u2660';
            break;
        case 'H':
            suit = '\u2665';
            break;
        case 'D':
            suit = '\u2666';
            break;
        case 'C':
            suit = '\u2663';
            break;

    }

    return {
        face: face,
        suit: suit,
        toString() {
            return face + suit;
        }
    }
}


console.log(solve('10', 'q').toString());