import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Color from './src/constants/Color';
import PlayerView from './src/containers/PlayerView';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <PlayerView />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.casinoGreen,
        justifyContent: 'center',
    },
});
