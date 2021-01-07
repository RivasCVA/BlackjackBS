import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlayingCardView from 'components/PlayingCardView';
import PlayingCard from 'models/PlayingCard';
import BasicAnimation from 'models/BasicAnimation';

/**
 * A playing card holder Component.
 * @description Automatically aligns the playing cards to the center.
 */
const PlayingCardHolderView = (props: Props): JSX.Element => {
    const { cards, initialOffsetX = 150, offsetAnimationDuration = 500 } = props;

    /**
     * Calculates and returns the x-position offset of a card.
     * @param numCards The number of cards being rendered.
     * @param i The index of the current card.
     */
    const getOffsetX = (numCards: number, i: number) => (i + 1) * Math.round(100 / (numCards + 1));

    /**
     * Processes the position of each card and returns a JSX Element array.
     * @param cards The cards to render.
     */
    const renderCards = (cards: PlayingCard[]) => {
        const numCards = cards.length;
        return cards.map((card, i) => {
            // Offset values
            const prevOffsetX = i < numCards - 1 ? getOffsetX(numCards - 1, i) : initialOffsetX;
            const newOffsetX = getOffsetX(numCards, i);

            // Animation
            const offsetX = new BasicAnimation.Value(prevOffsetX);
            BasicAnimation.easeValue(offsetX, newOffsetX, offsetAnimationDuration).start();

            return (
                <PlayingCardView
                    cardImage={card.getImage()}
                    offsetX={offsetX}
                    key={`${card.getID()}${i * 2}`}
                />
            );
        });
    };

    return <View style={styles.container}>{renderCards(cards)}</View>;
};

// Specify when to re-render
export default React.memo(
    PlayingCardHolderView,
    (prevProps, nextProps) => prevProps.cards === nextProps.cards
);

interface Props {
    /** The playing cards to render. */
    cards: PlayingCard[];
    /** Card offset X. */
    initialOffsetX?: number;
    /** Offset movement animation duration. */
    offsetAnimationDuration?: number;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '65%',
        height: 250,
    },
});
