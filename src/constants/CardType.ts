// Disable eslint warnings due to import inefficieny in such scenario
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

import { ImageSourcePropType } from 'react-native';

/**
 * Holds the data of each individual playing card in a 52-card deck.
 */
const CardType = {
    aceOfSpades: {
        id: 'As',
        image: require('../assets/cards/ace_of_spades.png') as ImageSourcePropType,
    },
    aceOfDiamonds: {
        id: 'Ad',
        image: require('../assets/cards/ace_of_diamonds.png') as ImageSourcePropType,
    },
    aceOfHearts: {
        id: 'Ah',
        image: require('../assets/cards/ace_of_hearts.png') as ImageSourcePropType,
    },
    aceOfClubs: {
        id: 'Ac',
        image: require('../assets/cards/ace_of_clubs.png') as ImageSourcePropType,
    },
};

export default CardType;
