/**
 * Holds the data of each individual playing card in a 52-card deck.
 */
const PlayingCardType = {
    backOfCard: {
        id: 'B',
        image: require('../assets/cards/back.png'),
    },
    aceOfSpades: {
        id: 'As',
        image: require('../assets/cards/ace_of_spades.png'),
    },
    twoOfSpades: {
        id: '2s',
        image: require('../assets/cards/2_of_spades.png'),
    },
    threeOfSpades: {
        id: '3s',
        image: require('../assets/cards/3_of_spades.png'),
    },
    fourOfSpades: {
        id: '4s',
        image: require('../assets/cards/4_of_spades.png'),
    },
    fiveOfSpades: {
        id: '5s',
        image: require('../assets/cards/5_of_spades.png'),
    },
    sixOfSpades: {
        id: '6s',
        image: require('../assets/cards/6_of_spades.png'),
    },
    sevenOfSpades: {
        id: '7s',
        image: require('../assets/cards/7_of_spades.png'),
    },
    eightOfSpades: {
        id: '8s',
        image: require('../assets/cards/8_of_spades.png'),
    },
    nineOfSpades: {
        id: '9s',
        image: require('../assets/cards/9_of_spades.png'),
    },
    tenOfSpades: {
        id: '10s',
        image: require('../assets/cards/10_of_spades.png'),
    },
    jackOfSpades: {
        id: 'Js',
        image: require('../assets/cards/jack_of_spades.png'),
    },
    queenOfSpades: {
        id: 'Qs',
        image: require('../assets/cards/queen_of_spades.png'),
    },
    kingOfSpades: {
        id: 'Ks',
        image: require('../assets/cards/king_of_spades.png'),
    },
    aceOfDiamonds: {
        id: 'Ad',
        image: require('../assets/cards/ace_of_diamonds.png'),
    },
    twoOfDiamonds: {
        id: '2d',
        image: require('../assets/cards/2_of_diamonds.png'),
    },
    threeOfDiamonds: {
        id: '3d',
        image: require('../assets/cards/3_of_diamonds.png'),
    },
    fourOfDiamonds: {
        id: '4d',
        image: require('../assets/cards/4_of_diamonds.png'),
    },
    fiveOfDiamonds: {
        id: '5d',
        image: require('../assets/cards/5_of_diamonds.png'),
    },
    sixOfDiamonds: {
        id: '6d',
        image: require('../assets/cards/6_of_diamonds.png'),
    },
    sevenOfDiamonds: {
        id: '7d',
        image: require('../assets/cards/7_of_diamonds.png'),
    },
    eightOfDiamonds: {
        id: '8d',
        image: require('../assets/cards/8_of_diamonds.png'),
    },
    nineOfDiamonds: {
        id: '9d',
        image: require('../assets/cards/9_of_diamonds.png'),
    },
    tenOfDiamonds: {
        id: '10d',
        image: require('../assets/cards/10_of_diamonds.png'),
    },
    jackOfDiamonds: {
        id: 'Jd',
        image: require('../assets/cards/jack_of_diamonds.png'),
    },
    queenOfDiamonds: {
        id: 'Qd',
        image: require('../assets/cards/queen_of_diamonds.png'),
    },
    kingOfDiamonds: {
        id: 'Kd',
        image: require('../assets/cards/king_of_diamonds.png'),
    },
    aceOfClubs: {
        id: 'Ac',
        image: require('../assets/cards/ace_of_clubs.png'),
    },
    twoOfClubs: {
        id: '2c',
        image: require('../assets/cards/2_of_clubs.png'),
    },
    threeOfClubs: {
        id: '3c',
        image: require('../assets/cards/3_of_clubs.png'),
    },
    fourOfClubs: {
        id: '4c',
        image: require('../assets/cards/4_of_clubs.png'),
    },
    fiveOfClubs: {
        id: '5c',
        image: require('../assets/cards/5_of_clubs.png'),
    },
    sixOfClubs: {
        id: '6c',
        image: require('../assets/cards/6_of_clubs.png'),
    },
    sevenOfClubs: {
        id: '7c',
        image: require('../assets/cards/7_of_clubs.png'),
    },
    eightOfClubs: {
        id: '8c',
        image: require('../assets/cards/8_of_clubs.png'),
    },
    nineOfClubs: {
        id: '9c',
        image: require('../assets/cards/9_of_clubs.png'),
    },
    tenOfClubs: {
        id: '10c',
        image: require('../assets/cards/10_of_clubs.png'),
    },
    jackOfClubs: {
        id: 'Jc',
        image: require('../assets/cards/jack_of_clubs.png'),
    },
    queenOfClubs: {
        id: 'Qc',
        image: require('../assets/cards/queen_of_clubs.png'),
    },
    kingOfClubs: {
        id: 'Kc',
        image: require('../assets/cards/king_of_clubs.png'),
    },
    aceOfHearts: {
        id: 'Ah',
        image: require('../assets/cards/ace_of_hearts.png'),
    },
    twoOfHearts: {
        id: '2h',
        image: require('../assets/cards/2_of_hearts.png'),
    },
    threeOfHearts: {
        id: '3h',
        image: require('../assets/cards/3_of_hearts.png'),
    },
    fourOfHearts: {
        id: '4h',
        image: require('../assets/cards/4_of_hearts.png'),
    },
    fiveOfHearts: {
        id: '5h',
        image: require('../assets/cards/5_of_hearts.png'),
    },
    sixOfHearts: {
        id: '6h',
        image: require('../assets/cards/6_of_hearts.png'),
    },
    sevenOfHearts: {
        id: '7h',
        image: require('../assets/cards/7_of_hearts.png'),
    },
    eightOfHearts: {
        id: '8h',
        image: require('../assets/cards/8_of_hearts.png'),
    },
    nineOfHearts: {
        id: '9h',
        image: require('../assets/cards/9_of_hearts.png'),
    },
    tenOfHearts: {
        id: '10h',
        image: require('../assets/cards/10_of_hearts.png'),
    },
    jackOfHearts: {
        id: 'Jh',
        image: require('../assets/cards/jack_of_hearts.png'),
    },
    queenOfHearts: {
        id: 'Qh',
        image: require('../assets/cards/queen_of_hearts.png'),
    },
    kingOfHearts: {
        id: 'Kh',
        image: require('../assets/cards/king_of_hearts.png'),
    },
};

export default PlayingCardType;
