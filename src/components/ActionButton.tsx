import React from 'react';
import { StyleSheet, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import Color from '../constants/Color';

/**
 * A basic Blackjack action button JSX Component.
 */
export default function ActionButton(props: Props): JSX.Element {
    const { title, onPress } = props;
    return (
        <TouchableOpacity style={styles.actionButton} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

interface Props {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
}

const styles = StyleSheet.create({
    actionButton: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 125,
        height: 50,
        borderRadius: 20,
        borderColor: Color.lightGray,
        borderWidth: 2,
        backgroundColor: Color.white,
        marginRight: 10,
        marginLeft: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Chalkboard SE',
        fontWeight: 'bold',
        fontSize: 24,
    },
});
