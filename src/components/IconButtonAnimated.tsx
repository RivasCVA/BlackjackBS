import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import LottieView from 'lottie-react-native';
import BasicHaptic from 'models/BasicHaptic';
import BasicAnimation from 'models/BasicAnimation';

/**
 * A button with an animated icon.
 */
const IconButtonAnimated = (props: Props): JSX.Element => {
    const { style, icon, onPress, hapticFeedback = false, animationDuration = 0, animationDelay = 0 } = props;

    const animationProgress = new BasicAnimation.Value(0);

    // Start the animation progress if a duration is present
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (animationDuration) {
            interval = setInterval(() => {
                animationProgress.setValue(0);
                BasicAnimation.easeValue(animationProgress, 1, animationDuration).start();
            }, animationDuration + animationDelay);
        }
        return () => {
            clearInterval(interval);
        };
    }, [animationDelay, animationDuration, animationProgress]);

    const handleOnPress = (event: GestureResponderEvent) => {
        if (hapticFeedback) BasicHaptic.generate('impactLight');
        onPress(event);
    };

    // Renders the animation with a custom duration if present. Defaults to autoplay.
    const renderAnimation = () => {
        if (!animationDuration) return <LottieView style={styles.icon} source={Icon[icon]} autoPlay loop />;
        return <LottieView style={styles.icon} source={Icon[icon]} progress={animationProgress} />;
    };

    return (
        <TouchableOpacity style={StyleSheet.flatten([styles.container, style])} onPress={handleOnPress}>
            {renderAnimation()}
        </TouchableOpacity>
    );
};

export default IconButtonAnimated;

interface Props {
    style?: StyleProp<ViewStyle>;
    /** The animated icon to render on the button. */
    icon: keyof typeof Icon;
    /** Button touch event. */
    onPress: (event: GestureResponderEvent) => void;
    /** Enable haptic feedback. */
    hapticFeedback?: boolean;
    /** The time duration of the animation (in milliseconds). */
    animationDuration?: number;
    /** The time delay between each animation loop (in milliseconds). */
    animationDelay?: number;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        aspectRatio: 1,
        height: 25,
    },
    icon: {
        alignSelf: 'center',
        aspectRatio: 1,
        height: '100%',
    },
});

/**
 * Available Animated Icons to render in the Icon Button Animated.
 */
const Icon = {
    PullDown: require('assets/animations/pull-down.json'),
    GearSpin: require('assets/animations/gear-spin.json'),
    DiceRoll: require('assets/animations/dice-roll.json'),
    CardDraw: require('assets/animations/card-draw.json'),
    ClosePulse: require('assets/animations/close-pulse.json'),
};
