import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
} from 'react-native';
import BasicHaptic from 'models/BasicHaptic';

/**
 * A button with an icon image.
 */
const IconButton = (props: Props): JSX.Element => {
    const { style, icon, onPress, haptic = false } = props;

    const handleOnPress = (event: GestureResponderEvent) => {
        onPress(event);
        if (haptic) BasicHaptic.generate('impactLight');
    };

    return (
        <TouchableOpacity style={StyleSheet.flatten([styles.container, style])} onPress={handleOnPress}>
            <Image style={styles.icon} source={Icon[icon]} />
        </TouchableOpacity>
    );
};

export default IconButton;

interface Props {
    style?: StyleProp<ViewStyle>;
    /** The image icon to render on the button. */
    icon: keyof typeof Icon;
    /** Button touch event. */
    onPress: (event: GestureResponderEvent) => void;
    /** Enable haptic feedback. */
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
 * Available Icons to render in the Icon Button.
 */
const Icon = {
    Close: require('assets/icons/close-icon.png'),
    Search: require('assets/icons/search-icon.png'),
};
