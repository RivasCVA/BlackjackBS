import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import PlayingCardHolderView from 'components/PlayingCardHolderView';
import PlayingCard from 'models/PlayingCard';

/**
 * The blackjack dealer's contents including the cards.
 */
const DealerContentView = (props: Props): JSX.Element => {
    const { style, cards } = props;
    return (
        <View style={StyleSheet.flatten([styles.container, style])}>
            <PlayingCardHolderView cards={cards} />
        </View>
    );
};

export default DealerContentView;

interface Props {
    style?: StyleProp<ViewStyle>;
    /** The dealer cards to render. */
    cards: PlayingCard[];
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        height: '40%',
    },
});
