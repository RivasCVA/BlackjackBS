// To import icon images
/* eslint-disable global-require */

import React from 'react';
import { StyleSheet, TouchableOpacity, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import LottieView from 'lottie-react-native';
import BasicHaptic from 'models/BasicHaptic';

/**
 * A basic button with an icon image.
 */
const IconButtonAnimated = (props: Props): JSX.Element => {
    const { style, icon, onPress, haptic = false } = props;

    const handleOnPress = (event: GestureResponderEvent) => {
        onPress(event);
        if (haptic) BasicHaptic.generate('impactLight');
    };

    return (
        <TouchableOpacity style={StyleSheet.flatten([styles.container, style])} onPress={handleOnPress}>
            <LottieView style={styles.icon} source={Icon[icon]} autoPlay loop />
        </TouchableOpacity>
    );
};

export default IconButtonAnimated;

interface Props {
    style?: StyleProp<ViewStyle>;
    icon: keyof typeof Icon;
    onPress: (event: GestureResponderEvent) => void;
    /** Enable haptic feedback */
    haptic?: boolean;
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
};
