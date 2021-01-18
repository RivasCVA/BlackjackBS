import React from 'react';
import { StyleSheet, View, Text, Switch, StyleProp, ViewStyle } from 'react-native';
import Color from 'models/Color';
import Font from 'models/Font';

/**
 * A bar holding a text description and a switch component.
 */
const SwitchOptionView = (props: Props): JSX.Element => {
    const { style, text, onValueChange, value } = props;
    return (
        <View style={StyleSheet.flatten([styles.container, style])}>
            <Text style={styles.text}>{text}</Text>
            <Switch
                trackColor={{ false: Color.white, true: Color.casinoGreen }}
                thumbColor={Color.white}
                ios_backgroundColor={Color.darkGray}
                onValueChange={onValueChange}
                value={value}
            />
        </View>
    );
};

export default SwitchOptionView;

interface Props {
    /** The bar style. */
    style?: StyleProp<ViewStyle>;
    /** The option title or description. */
    text: string;
    /** When the switch is toggled. */
    onValueChange: (value: boolean) => void;
    /** The value of the switch. */
    value: boolean;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        height: 50,
        paddingHorizontal: 5,
        backgroundColor: Color.casinoOrange,
        borderRadius: 14,
        borderColor: Color.white,
        borderWidth: 2,
    },
    text: {
        fontFamily: Font('Poppins-Medium'),
        fontSize: 16,
        color: Color.white,
    },
});
