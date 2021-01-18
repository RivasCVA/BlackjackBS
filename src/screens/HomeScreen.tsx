import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Color from 'models/Color';
import PlayingCard from 'models/PlayingCard';
import PlayingCardHolderView from 'components/PlayingCardHolderView';
import IconButtonAnimated from 'components/IconButtonAnimated';
import BasicButton from 'components/BasicButton';
import Font from 'models/Font';

/**
 * The BlackjackBS home screen.
 */
const HomeScreen = (props: Props): JSX.Element => {
    const playingCards = [new PlayingCard('aceOfSpades'), new PlayingCard('jackOfSpades')];
    return (
        <LinearGradient style={styles.container} colors={Color.gradient.mangoGradient}>
            <SafeAreaView style={styles.container}>
                <StatusBar />
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Blackjack</Text>
                    <Text style={styles.subtitle}>Basic Strategy</Text>
                </View>
                <PlayingCardHolderView style={styles.playingCardHolder} cards={playingCards} />
                <View style={styles.routesContainer}>
                    <View style={styles.iconButtonContainer}>
                        <IconButtonAnimated
                            animationDuration={2500}
                            animationDelay={500}
                            style={styles.iconButton}
                            icon="CardDraw"
                            onPress={() => props.navigation.navigate('Blackjack')}
                        />
                        <IconButtonAnimated
                            animationDuration={2500}
                            animationDelay={500}
                            style={styles.iconButton}
                            icon="GearSpin"
                            onPress={() => props.navigation.navigate('Settings')}
                        />
                    </View>
                    <View style={styles.titleButtonContainer}>
                        <BasicButton
                            style={styles.titleButton}
                            title="Begin Training"
                            titleStyle={styles.titleButtonTitle}
                            onPress={() => props.navigation.navigate('Blackjack')}
                        />
                        <BasicButton
                            style={styles.titleButton}
                            title="Settings"
                            titleStyle={styles.titleButtonTitle}
                            onPress={() => props.navigation.navigate('Settings')}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default HomeScreen;

type Props = NavigationStackScreenProps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'center',
        fontFamily: Font('Poppins-Bold'),
        fontSize: 40,
    },
    subtitle: {
        alignSelf: 'center',
        fontFamily: Font('Rubik-Regular'),
        fontSize: 24,
        marginTop: -2,
    },
    playingCardHolder: {
        marginVertical: 35,
    },
    routesContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: 250,
        height: 100,
        backgroundColor: Color.white,
        borderRadius: 18,
        shadowColor: Color.black,
        shadowOpacity: 0.75,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    iconButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '25%',
        borderRadius: 18,
        backgroundColor: Color.white,
        shadowColor: Color.black,
        shadowOpacity: 0.75,
        shadowRadius: 4,
        shadowOffset: {
            width: 2,
            height: 0,
        },
    },
    iconButton: {
        alignSelf: 'center',
        aspectRatio: 1,
        height: 50,
    },
    titleButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '75%',
    },
    titleButton: {
        width: '100%',
        height: 50,
    },
    titleButtonTitle: {
        fontFamily: Font('Rubik-Bold'),
        fontSize: 22,
    },
});
