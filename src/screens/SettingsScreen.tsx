import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatGrid } from 'react-native-super-grid';
import ChartOptionButton from 'components/ChartOptionButton';
import IconButton from 'components/IconButton';
import Color from 'models/Color';
import Font from 'models/Font';
import StorageManager from 'models/StorageManager';
import SwitchOptionView from 'components/SwitchOptionView';

// Import the chart data
import * as BasicStrategyChartData from 'assets/charts/chart.json';

/**
 * The BlackjackBS settings screen.
 */
const SettignsScreen = (props: Props): JSX.Element => {
    const [activeChartID, setActiveChartID] = useState('');
    const [hapticFeedbackEnabled, setHapticFeedbackEnabled] = useState(false);
    const SCREEN_WIDTH = Dimensions.get('window').width;

    // Setup activeChartID
    useEffect(() => {
        StorageManager.shared
            .getItem('save_activeChartID')
            .then((value) => {
                setActiveChartID(value);
            })
            .catch((error) => {
                console.log(error);
            });
        StorageManager.shared
            .getItem('save_hapticFeedbackEnabled')
            .then((value) => {
                setHapticFeedbackEnabled(value === 'true');
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChartOption = (chartID: string) => {
        StorageManager.shared
            .setItem('save_activeChartID', chartID)
            .then(() => {
                setActiveChartID(chartID);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleHapticFeedbackSwitch = (value: boolean) => {
        StorageManager.shared
            .setItem('save_hapticFeedbackEnabled', value ? 'true' : 'false')
            .then(() => {
                setHapticFeedbackEnabled(value);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <LinearGradient style={styles.container} colors={Color.gradient.hydrogenGradient}>
            <SafeAreaView style={styles.container}>
                <IconButton
                    style={styles.closeButton}
                    icon="Close"
                    onPress={() => props.navigation.goBack(null)}
                />
                <Text style={styles.title}>Settings</Text>
                <View style={styles.switchOptionsContainer}>
                    <SwitchOptionView
                        text="Haptic Feedback"
                        onValueChange={handleHapticFeedbackSwitch}
                        value={hapticFeedbackEnabled}
                    />
                </View>
                <View style={styles.chartOptionsContainer}>
                    <Text style={styles.chartOptionsTitle}>Chart:</Text>
                    <FlatGrid
                        contentContainerStyle={styles.flatGrid}
                        itemDimension={SCREEN_WIDTH}
                        spacing={10}
                        data={BasicStrategyChartData.charts}
                        renderItem={({ item }) => {
                            return (
                                <ChartOptionButton
                                    haptic
                                    chartID={item.id}
                                    onPress={() => handleChartOption(item.id)}
                                    isSelected={activeChartID === item.id}
                                />
                            );
                        }}
                    />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default SettignsScreen;

type Props = NavigationStackScreenProps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    closeButton: {
        marginLeft: 15,
    },
    title: {
        alignSelf: 'center',
        marginTop: -25,
        fontFamily: Font('Poppins-Bold'),
        fontSize: 36,
        color: Color.white,
    },
    switchOptionsContainer: {
        marginTop: 15,
    },
    chartOptionsContainer: {
        marginTop: 15,
    },
    chartOptionsTitle: {
        fontFamily: Font('Poppins-Bold'),
        fontSize: 20,
        color: Color.white,
        marginLeft: 15,
    },
    flatGrid: {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
    },
});
