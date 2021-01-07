// Disable eslint warnings due to import inefficieny in such scenario
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

import { ImageSourcePropType } from 'react-native';

/**
 * Holds the data of each individual playing card in a 52-card deck.
 */
const PlayingCardType = {
    backOfCard: {
        id: 'B',
        image: require('../assets/cards/back.png') as ImageSourcePropType,
    },
    aceOfSpades: {
        id: 'As',
        image: require('../assets/cards/ace_of_spades.png') as ImageSourcePropType,
    },
    twoOfSpades: {
        id: '2s',
        image: require('../assets/cards/2_of_spades.png') as ImageSourcePropType,
    },
    threeOfSpades: {
        id: '3s',
        image: require('../assets/cards/3_of_spades.png') as ImageSourcePropType,
    },
    fourOfSpades: {
        id: '4s',
        image: require('../assets/cards/4_of_spades.png') as ImageSourcePropType,
    },
    fiveOfSpades: {
        id: '5s',
        image: require('../assets/cards/5_of_spades.png') as ImageSourcePropType,
    },
    sixOfSpades: {
        id: '6s',
        image: require('../assets/cards/6_of_spades.png') as ImageSourcePropType,
    },
    sevenOfSpades: {
        id: '7s',
        image: require('../assets/cards/7_of_spades.png') as ImageSourcePropType,
    },
    eightOfSpades: {
        id: '8s',
        image: require('../assets/cards/8_of_spades.png') as ImageSourcePropType,
    },
    nineOfSpades: {
        id: '9s',
        image: require('../assets/cards/9_of_spades.png') as ImageSourcePropType,
    },
    tenOfSpades: {
        id: '10s',
        image: require('../assets/cards/10_of_spades.png') as ImageSourcePropType,
    },
    jackOfSpades: {
        id: 'Js',
        image: require('../assets/cards/jack_of_spades.png') as ImageSourcePropType,
    },
    queenOfSpades: {
        id: 'Qs',
        image: require('../assets/cards/queen_of_spades.png') as ImageSourcePropType,
    },
    kingOfSpades: {
        id: 'Ks',
        image: require('../assets/cards/king_of_spades.png') as ImageSourcePropType,
    },
    aceOfDiamonds: {
        id: 'Ad',
        image: require('../assets/cards/ace_of_diamonds.png') as ImageSourcePropType,
    },
    twoOfDiamonds: {
        id: '2d',
        image: require('../assets/cards/2_of_diamonds.png') as ImageSourcePropType,
    },
    threeOfDiamonds: {
        id: '3d',
        image: require('../assets/cards/3_of_diamonds.png') as ImageSourcePropType,
    },
    fourOfDiamonds: {
        id: '4d',
        image: require('../assets/cards/4_of_diamonds.png') as ImageSourcePropType,
    },
    fiveOfDiamonds: {
        id: '5d',
        image: require('../assets/cards/5_of_diamonds.png') as ImageSourcePropType,
    },
    sixOfDiamonds: {
        id: '6d',
        image: require('../assets/cards/6_of_diamonds.png') as ImageSourcePropType,
    },
    sevenOfDiamonds: {
        id: '7d',
        image: require('../assets/cards/7_of_diamonds.png') as ImageSourcePropType,
    },
    eightOfDiamonds: {
        id: '8d',
        image: require('../assets/cards/8_of_diamonds.png') as ImageSourcePropType,
    },
    nineOfDiamonds: {
        id: '9d',
        image: require('../assets/cards/9_of_diamonds.png') as ImageSourcePropType,
    },
    tenOfDiamonds: {
        id: '10d',
        image: require('../assets/cards/10_of_diamonds.png') as ImageSourcePropType,
    },
    jackOfDiamonds: {
        id: 'Jd',
        image: require('../assets/cards/jack_of_diamonds.png') as ImageSourcePropType,
    },
    queenOfDiamonds: {
        id: 'Qd',
        image: require('../assets/cards/queen_of_diamonds.png') as ImageSourcePropType,
    },
    kingOfDiamonds: {
        id: 'Kd',
        image: require('../assets/cards/king_of_diamonds.png') as ImageSourcePropType,
    },
    aceOfClubs: {
        id: 'Ac',
        image: require('../assets/cards/ace_of_clubs.png') as ImageSourcePropType,
    },
    twoOfClubs: {
        id: '2c',
        image: require('../assets/cards/2_of_clubs.png') as ImageSourcePropType,
    },
    threeOfClubs: {
        id: '3c',
        image: require('../assets/cards/3_of_clubs.png') as ImageSourcePropType,
    },
    fourOfClubs: {
        id: '4c',
        image: require('../assets/cards/4_of_clubs.png') as ImageSourcePropType,
    },
    fiveOfClubs: {
        id: '5c',
        image: require('../assets/cards/5_of_clubs.png') as ImageSourcePropType,
    },
    sixOfClubs: {
        id: '6c',
        image: require('../assets/cards/6_of_clubs.png') as ImageSourcePropType,
    },
    sevenOfClubs: {
        id: '7c',
        image: require('../assets/cards/7_of_clubs.png') as ImageSourcePropType,
    },
    eightOfClubs: {
        id: '8c',
        image: require('../assets/cards/8_of_clubs.png') as ImageSourcePropType,
    },
    nineOfClubs: {
        id: '9c',
        image: require('../assets/cards/9_of_clubs.png') as ImageSourcePropType,
    },
    tenOfClubs: {
        id: '10c',
        image: require('../assets/cards/10_of_clubs.png') as ImageSourcePropType,
    },
    jackOfClubs: {
        id: 'Jc',
        image: require('../assets/cards/jack_of_clubs.png') as ImageSourcePropType,
    },
    queenOfClubs: {
        id: 'Qc',
        image: require('../assets/cards/queen_of_clubs.png') as ImageSourcePropType,
    },
    kingOfClubs: {
        id: 'Kc',
        image: require('../assets/cards/king_of_clubs.png') as ImageSourcePropType,
    },
    aceOfHearts: {
        id: 'Ah',
        image: require('../assets/cards/ace_of_hearts.png') as ImageSourcePropType,
    },
    twoOfHearts: {
        id: '2h',
        image: require('../assets/cards/2_of_hearts.png') as ImageSourcePropType,
    },
    threeOfHearts: {
        id: '3h',
        image: require('../assets/cards/3_of_hearts.png') as ImageSourcePropType,
    },
    fourOfHearts: {
        id: '4h',
        image: require('../assets/cards/4_of_hearts.png') as ImageSourcePropType,
    },
    fiveOfHearts: {
        id: '5h',
        image: require('../assets/cards/5_of_hearts.png') as ImageSourcePropType,
    },
    sixOfHearts: {
        id: '6h',
        image: require('../assets/cards/6_of_hearts.png') as ImageSourcePropType,
    },
    sevenOfHearts: {
        id: '7h',
        image: require('../assets/cards/7_of_hearts.png') as ImageSourcePropType,
    },
    eightOfHearts: {
        id: '8h',
        image: require('../assets/cards/8_of_hearts.png') as ImageSourcePropType,
    },
    nineOfHearts: {
        id: '9h',
        image: require('../assets/cards/9_of_hearts.png') as ImageSourcePropType,
    },
    tenOfHearts: {
        id: '10h',
        image: require('../assets/cards/10_of_hearts.png') as ImageSourcePropType,
    },
    jackOfHearts: {
        id: 'Jh',
        image: require('../assets/cards/jack_of_hearts.png') as ImageSourcePropType,
    },
    queenOfHearts: {
        id: 'Qh',
        image: require('../assets/cards/queen_of_hearts.png') as ImageSourcePropType,
    },
    kingOfHearts: {
        id: 'Kh',
        image: require('../assets/cards/king_of_hearts.png') as ImageSourcePropType,
    },
};

export default PlayingCardType;
