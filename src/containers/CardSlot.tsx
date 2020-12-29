import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardView from '../components/CardView';
import Card from '../models/Card';
import BasicAnimation from '../models/BasicAnimation';

/**
 * A card slot JSX Container that holds playing cards and centers them automatically.
 */
export default function CardSlot(props: Props): JSX.Element {
    const { cards } = props;
    const NEW_CARD_OFFSET_X = 150;
    const CARD_OFFSET_ANIMATION_DURATION = 500;

    /**
     * Calculates and returns the x-position offset of the current card.
     * @param numCards The number of cards being rendered.
     * @param i The index of the current card.
     */
    const calculateOffsetX = (numCards: number, i: number) => {
        return (i + 1) * Math.round(100 / (numCards + 1));
    };

    /**
     * Processes the position of each individual card and returns the JSX Element array of all CardViews.
     * @param cards The cards to render.
     */
    const renderCards = (cards: Card[]) => {
        const numCards = cards.length;
        return cards.map((card, i) => {
            // Offset values
            const prevOffsetX = i < numCards - 1 ? calculateOffsetX(numCards - 1, i) : NEW_CARD_OFFSET_X;
            const newOffsetX = calculateOffsetX(numCards, i);

            // Animation
            const offsetX = new BasicAnimation.Value(prevOffsetX);
            BasicAnimation.easeValue(offsetX, newOffsetX, CARD_OFFSET_ANIMATION_DURATION).start();

            return <CardView cardImage={card.getImage()} offsetX={offsetX} key={`${card.getID()}${i * 2}`} />;
        });
    };

    return <View style={styles.cardSlot}>{renderCards(cards)}</View>;
}

interface Props {
    /** The playing cards to render. */
    cards: Card[];
}

const styles = StyleSheet.create({
    cardSlot: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '65%',
        height: 250,
    },
});
