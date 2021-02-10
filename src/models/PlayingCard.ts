import { ImageSourcePropType } from 'react-native';
import PlayingCardType from 'models/PlayingCardType';

/**
 * Holds the properties of a playing card.
 * @param cardType The card to assign ('random' assigns a random card).
 */
export default class PlayingCard {
    private card;

    constructor(cardType: keyof typeof PlayingCardType | 'random') {
        this.card = cardType === 'random' ? this.getRandomCard() : PlayingCardType[cardType];
    }

    /**
     * Fetches a random card from the CardType object.
     * @returns An object with the card's properties.
     */
    private getRandomCard = (): { id: string; image: ImageSourcePropType } => {
        const keys = Object.keys(PlayingCardType) as (keyof typeof PlayingCardType)[];
        const randKey = keys[Math.floor(Math.random() * keys.length)];
        const newCard = PlayingCardType[randKey];
        return newCard.id !== PlayingCardType.backOfCard.id ? newCard : this.getRandomCard();
    };

    /** The card ID. */
    public getID = (): string => this.card.id;

    /** The card image. */
    public getImage = (): ImageSourcePropType => this.card.image;
}
