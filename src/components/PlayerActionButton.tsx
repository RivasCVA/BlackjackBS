import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BasicHaptic from 'models/BasicHaptic';
import Color from 'models/Color';
import Font from 'models/Font';

/**
 * A blackjack player action button.
 */
const PlayerActionButton = (props: Props): JSX.Element => {
    const { style, title, titleStyle, onPress, disabled = false, hapticFeedback = false } = props;

    const handleOnPress = (event: GestureResponderEvent) => {
        if (hapticFeedback) BasicHaptic.generate('impactLight');
        onPress(event);
    };

    return (
        <TouchableOpacity
            style={StyleSheet.flatten([styles.container, style])}
            onPress={handleOnPress}
            disabled={disabled}
            activeOpacity={0.75}
        >
            <LinearGradient
                style={styles.linearGradient1}
                colors={Color.gradient.midnightCityGradient}
                start={[0, 0]}
                end={[1, 1]}
            >
                <LinearGradient
                    style={styles.linearGradient2}
                    colors={Color.gradient.mangoGradient}
                    start={[0, 0]}
                    end={[1, 1]}
                >
                    <Text style={StyleSheet.flatten([styles.title, titleStyle])}>{title}</Text>
                </LinearGradient>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default PlayerActionButton;

interface Props {
    /** The button style. */
    style?: StyleProp<ViewStyle>;
    /** The button title. */
    title: string;
    /** The button title style. */
    titleStyle?: StyleProp<TextStyle>;
    /** Button action event. */
    onPress: (event: GestureResponderEvent) => void;
    /** When disabled, the button events are disabled and opacity is reduced. */
    disabled?: boolean;
    /** Enable haptic feedback */
    hapticFeedback?: boolean;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: 125,
        height: 50,
        shadowColor: Color.black,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    linearGradient1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    linearGradient2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        height: '90%',
        borderRadius: 18,
    },
    title: {
        textAlign: 'center',
        fontFamily: Font('Rubik-Medium'),
        fontSize: 24,
    },
});
