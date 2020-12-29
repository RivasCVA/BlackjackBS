import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from '../components/ActionButton';
import CardSlot from '../containers/CardSlot';
import Card from '../models/Card';

/**
 * The player's Cards and Actions as a JSX Container.
 */
export default function PlayerView(): JSX.Element {
    const [cards, setCards] = useState<Card[]>([new Card('random')]);

    /**
     * Inserts a card.
     */
    const addCard = () => {
        setCards([...cards, new Card('random')]);
    };

    /**
     * Removes a card.
     * NOTE: This is for testing purposes only.
     */
    const removeCard = () => {
        if (cards.length) {
            setCards(
                cards.filter((_, i) => {
                    return i !== cards.length - 1;
                })
            );
        }
    };

    return (
        <View style={styles.playerView}>
            <CardSlot cards={cards} />
            <View style={styles.buttonContainer}>
                <ActionButton title="Hit" onPress={addCard} />
                <ActionButton title="Remove" onPress={removeCard} />
                {/* <ActionButton title="Stay" onPress={removeCard} /> */}
            </View>
            <View style={styles.buttonContainer}>
                {/* <ActionButton title="Split" onPress={removeCard} />
                <ActionButton title="DD" onPress={removeCard} /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    playerView: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
});
