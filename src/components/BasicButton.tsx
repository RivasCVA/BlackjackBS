import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    StyleProp,
    ViewStyle,
    TextStyle,
    GestureResponderEvent,
} from 'react-native';

/**
 * A button with a stylable view and title.
 */
const BasicButton = (props: Props): JSX.Element => {
    const { style, title, titleStyle, onPress } = props;
    return (
        <TouchableOpacity style={StyleSheet.flatten([styles.container, style])} onPress={onPress}>
            <Text style={StyleSheet.flatten([styles.title, titleStyle])}>{title}</Text>
        </TouchableOpacity>
    );
};

export default BasicButton;

interface Props {
    /** The buttons style. */
    style?: StyleProp<ViewStyle>;
    /** The button title. */
    title: string;
    /** The button title style. */
    titleStyle?: StyleProp<TextStyle>;
    /** Touch event. */
    onPress: (event: GestureResponderEvent) => void;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 150,
        height: 50,
    },
    title: {
        alignSelf: 'center',
        fontSize: 20,
    },
});
