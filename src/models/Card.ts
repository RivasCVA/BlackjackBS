import { ImageSourcePropType } from 'react-native';
import CardType from '../constants/CardType';

/**
 * Provides the properties of a playing card.
 * @param cardType The card to assign ('random' assigns a random card).
 */
export default class Card {
    // Holds the card properties
    private card;

    constructor(cardType: keyof typeof CardType | 'random') {
        this.card = cardType === 'random' ? this.getRandomCard() : CardType[cardType];
    }

    /**
     * Fetches a random card from the CardType object.
     */
    private getRandomCard = () => {
        const keys = Object.keys(CardType) as (keyof typeof CardType)[];
        const randKey = keys[Math.floor(Math.random() * keys.length)];
        return CardType[randKey];
    };

    /** The card ID. */
    public getID = (): string => this.card.id;

    /** The card image. */
    public getImage = (): ImageSourcePropType => this.card.image;
}
