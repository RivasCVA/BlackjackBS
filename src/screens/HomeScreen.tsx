import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Button, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import Color from 'models/Color';
import PlayingCardView from 'components/PlayingCardView';

const HomeScreen = (props: Props): JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Blackjack</Text>
                <Text style={styles.subtitle}>Basic Strategy</Text>
            </View>
            <View style={styles.imageContainer}>
                <PlayingCardView />
            </View>
            <View style={styles.buttonConainer}>
                <View style={styles.button}>
                    <Button
                        color={styles.button.color}
                        title="Play"
                        onPress={() => props.navigation.navigate('Blackjack')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

type Props = NavigationStackScreenProps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'center',
        fontSize: 36,
        fontWeight: 'bold',
    },
    subtitle: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '300',
    },
    imageContainer: {
        height: 300,
        justifyContent: 'center',
    },
    buttonConainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: 125,
        height: 50,
        fontSize: 15,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Color.lightGray,
        backgroundColor: Color.casinoGreen,
        color: Color.white,
    },
});
