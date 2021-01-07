import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import IconButton from 'components/IconButton';
import BlackjackGameContainer from 'containers/BlackjackGameContainer';
import { LinearGradient } from 'expo-linear-gradient';
import Color from 'models/Color';

const BlackjackScreen = (props: Props): JSX.Element => {
    return (
        <LinearGradient style={styles.linearGradient} colors={Color.kennedyGradient}>
            <SafeAreaView style={styles.container}>
                <View style={styles.optionsBar}>
                    <IconButton icon="Close" haptic onPress={() => props.navigation.goBack(null)} />
                    <IconButton
                        icon="Search"
                        haptic
                        onPress={() => props.navigation.navigate('ChartGuide')}
                    />
                </View>
                <BlackjackGameContainer />
            </SafeAreaView>
        </LinearGradient>
    );
};

export default BlackjackScreen;

type Props = NavigationStackScreenProps;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
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
