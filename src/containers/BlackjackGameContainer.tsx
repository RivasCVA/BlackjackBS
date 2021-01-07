import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import PlayerContentView from 'components/PlayerContentView';
import DealerContentView from 'components/DealerContentView';
import PlayerActionResponseModal, { PlayerActionResponse } from 'components/PlayerActionResponseModal';
import BasicHaptic from 'models/BasicHaptic';
import BlackjackBrain from 'models/BlackjackBrain';
import PlayerAction from 'models/PlayerAction';
import PlayingCard from 'models/PlayingCard';

/**
 * The blackjack game components Container.
 */
const BlackjackGameContainer = (): JSX.Element => {
    const [playerCards, setPlayerCards] = useState<PlayingCard[]>([]);
    const [dealerCards, setDealerCards] = useState<PlayingCard[]>([]);
    const [playerActionModalVisible, setPlayerActionModalVisible] = useState(false);
    const [playerActionResponse, setPlayerActionResponse] = useState(PlayerActionResponse.CORRECT);
    const [canSplit, setCanSplit] = useState(false);

    /**
     * Resets the Player and Dealer cards to a new hand.
     */
    const resetCards = useCallback(() => {
        setPlayerCards([new PlayingCard('random'), new PlayingCard('random')]);
        setDealerCards([new PlayingCard('backOfCard'), new PlayingCard('random')]);
    }, []);

    /**
     * Handles the Player's Action.
     * @param action The Player Action.
     */
    const onPlayerAction = useCallback(
        (action: PlayerAction) => {
            // Animate adding card
            if (action === PlayerAction.Hit || action === PlayerAction.DoubleDown) {
                setPlayerCards([...playerCards, new PlayingCard('random')]);
            }

            // Show action response and generate feedback
            if (BlackjackBrain.shared.checkAction(playerCards, dealerCards, action)) {
                setPlayerActionResponse(PlayerActionResponse.CORRECT);
                BasicHaptic.generate('impactMedium', 100);
            } else {
                setPlayerActionResponse(PlayerActionResponse.WRONG);
                BasicHaptic.generate('impactHeavy', 100);
            }

            // Delay next hand
            setPlayerActionModalVisible(true);
            const nextHandDelayInterval = setInterval(() => {
                setPlayerActionModalVisible(false);
                resetCards();
                clearInterval(nextHandDelayInterval);
            }, 1250);
        },
        [playerCards, dealerCards, resetCards]
    );

    // Component Did Mount
    useEffect(() => {
        resetCards();
    }, [resetCards]);

    // When the Player's cards change upon a new hand
    useEffect(() => {
        setCanSplit(BlackjackBrain.shared.canSplit(playerCards));
        if (BlackjackBrain.shared.isBlackjack(playerCards)) {
            onPlayerAction(PlayerAction.Stay);
        }
    }, [onPlayerAction, playerCards]);

    return (
        <View style={styles.container}>
            <DealerContentView cards={dealerCards} />
            <PlayerContentView cards={playerCards} onAction={onPlayerAction} splitButtonEnabled={canSplit} />
            <PlayerActionResponseModal
                actionReponse={playerActionResponse}
                visible={playerActionModalVisible}
                animationDuration={1250}
            />
        </View>
    );
};

export default BlackjackGameContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
