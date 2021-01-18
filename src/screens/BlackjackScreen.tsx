import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import IconButton from 'components/IconButton';
import BlackjackGameContainer from 'containers/BlackjackGameContainer';
import { LinearGradient } from 'expo-linear-gradient';
import Color from 'models/Color';

/**
 * The main Blackjack game screen.
 */
const BlackjackScreen = (props: Props): JSX.Element => {
    return (
        <LinearGradient style={styles.container} colors={Color.gradient.kennedyGradient}>
            <SafeAreaView style={styles.container}>
                <View style={styles.optionsBar}>
                    <IconButton icon="Close" haptic onPress={() => props.navigation.goBack(null)} />
                    <IconButton icon="Search" haptic onPress={() => props.navigation.navigate('Chart')} />
                </View>
                <BlackjackGameContainer />
            </SafeAreaView>
        </LinearGradient>
    );
};

export default BlackjackScreen;

type Props = NavigationStackScreenProps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    optionsBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
    },
});
