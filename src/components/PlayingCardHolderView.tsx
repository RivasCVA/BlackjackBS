import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import PlayingCardView from 'components/PlayingCardView';
import PlayingCard from 'models/PlayingCard';
import BasicAnimation from 'models/BasicAnimation';

/**
 * A playing card content holder.
 * @summary Automatically aligns the playing cards to the center of the view.
 */
const PlayingCardHolderView = (props: Props): JSX.Element => {
    const { style, cards, initialOffsetX = 150, offsetAnimationDuration = 500 } = props;

    // Calculates and returns the x-position offset of a card
    const getOffsetX = (numCards: number, i: number) => (i + 1) * Math.round(100 / (numCards + 1));

    // Processes the position of each card and returns a JSX Element array.
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

    return <View style={StyleSheet.flatten([styles.container, style])}>{renderCards(cards)}</View>;
};

// Specify when to re-render
export default React.memo(
    PlayingCardHolderView,
    (prevProps, nextProps) => prevProps.cards === nextProps.cards
);

interface Props {
    style?: StyleProp<ViewStyle>;
    /** The playing cards to render. */
    cards: PlayingCard[];
    /** The card x-offset. */
    initialOffsetX?: number;
    /** The offset-to-center movement animation duration. */
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
