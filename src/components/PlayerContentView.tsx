import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import PlayerActionButton from 'components/PlayerActionButton';
import PlayingCardHolderView from 'components/PlayingCardHolderView';
import PlayerAction from 'models/PlayerAction';
import PlayingCard from 'models/PlayingCard';

/**
 * The Player's card and action contents Component.
 */
const PlayerContentView = (props: Props): JSX.Element => {
    const { style, cards, onAction, splitButtonEnabled = false } = props;
    return (
        <View style={StyleSheet.flatten([styles.container, style])}>
            <PlayingCardHolderView cards={cards} />
            <View style={styles.buttonContainer}>
                <View style={styles.actionButtonRow}>
                    <PlayerActionButton
                        style={styles.actionButton}
                        title="Hit"
                        onPress={() => {
                            onAction(PlayerAction.Hit);
                        }}
                    />
                    <PlayerActionButton
                        style={styles.actionButton}
                        title="Stay"
                        onPress={() => {
                            onAction(PlayerAction.Stay);
                        }}
                    />
                </View>
                <View style={styles.actionButtonRow}>
                    <PlayerActionButton
                        style={StyleSheet.flatten([
                            styles.actionButton,
                            !splitButtonEnabled ? styles.disabledButton : {},
                        ])}
                        title="Split"
                        disabled={!splitButtonEnabled}
                        onPress={() => {
                            onAction(PlayerAction.Split);
                        }}
                    />
                    <PlayerActionButton
                        style={styles.actionButton}
                        title="D-Down"
                        onPress={() => {
                            onAction(PlayerAction.DoubleDown);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default PlayerContentView;

interface Props {
    style?: StyleProp<ViewStyle>;
    /** The player cards to render. */
    cards: PlayingCard[];
    /** When the player makes a game action. */
    onAction: (action: PlayerAction) => void;
    splitButtonEnabled?: boolean;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        height: '60%',
    },
    buttonContainer: {
        marginTop: 20,
    },
    actionButtonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 8,
    },
    actionButton: {
        marginHorizontal: 10,
    },
    disabledButton: {
        opacity: 0.5,
    },
});
