import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatGrid } from 'react-native-super-grid';
import ChartOptionButton from 'components/ChartOptionButton';
import SwitchOptionView from 'components/SwitchOptionView';
import IconButton from 'components/IconButton';
import { AvailableKeys } from 'models/StorageManager';
import BasicChartManager from 'models/BasicChartManager';
import Color from 'models/Color';
import Font from 'models/Font';

/**
 * The BlackjackBS settings screen.
 */
const SettignsScreen = (props: Props): JSX.Element => {
    const [hapticFeedbackEnabled, setHapticFeedbackEnabled] = useState(false);
    const [dealerStandsSoft17, setDealerStandsSoft17] = useState(false);
    const [doubleAfterSplitAllowed, setDoubleAfterSplitAllowed] = useState(false);
    const [activeChartID, setActiveChartID] = useState(''); // Only requires the 3-character prefix
    const SCREEN_WIDTH = Dimensions.get('window').width;

    // Setup saved user settings
    useEffect(() => {
        const fetchSettings = async () => {
            setHapticFeedbackEnabled(await AvailableKeys.save_hapticFeedbackEnabled.get());
            setDealerStandsSoft17(await AvailableKeys.save_dealerStandsSoft17.get());
            setDoubleAfterSplitAllowed(await AvailableKeys.save_doubleAfterSplitAllowed.get());
            setActiveChartID((await AvailableKeys.save_activeChartID.get()).substring(0, 3));
        };
        fetchSettings();
    }, []);

    const handleHapticFeedbackSwitch = (value: boolean) => {
        AvailableKeys.save_hapticFeedbackEnabled.set(value);
        setHapticFeedbackEnabled(value);
    };

    const handleDealerStandsSoft17Switch = (value: boolean) => {
        AvailableKeys.save_dealerStandsSoft17.set(value);
        setDealerStandsSoft17(value);
    };

    const handleDoubleAfterSplitAllowedSwitch = (value: boolean) => {
        AvailableKeys.save_doubleAfterSplitAllowed.set(value);
        setDoubleAfterSplitAllowed(value);
    };

    const handleChartOptionButton = (chartID: string) => {
        setActiveChartID(chartID);
    };

    // Saves new chart ID upon settings change
    useEffect(() => {
        const chartID = activeChartID;
        if (!chartID) return;

        let formattedChartID: string;
        if (!dealerStandsSoft17 && !doubleAfterSplitAllowed) formattedChartID = `${chartID}DHNDAS`;
        else if (!dealerStandsSoft17) formattedChartID = `${chartID}DH`;
        else if (!doubleAfterSplitAllowed) formattedChartID = `${chartID}NDAS`;
        else formattedChartID = chartID;

        AvailableKeys.save_activeChartID.set(formattedChartID);
    }, [activeChartID, dealerStandsSoft17, doubleAfterSplitAllowed]);

    return (
        <LinearGradient style={styles.container} colors={Color.gradient.htmlGradient}>
            <SafeAreaView style={styles.container}>
                <IconButton
                    style={styles.closeButton}
                    icon="Close"
                    onPress={() => props.navigation.goBack(null)}
                    hapticFeedback
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
                    <SwitchOptionView
                        text="Dealer Stands Soft 17"
                        onValueChange={handleDealerStandsSoft17Switch}
                        value={dealerStandsSoft17}
                    />
                    <SwitchOptionView
                        text="Double After Split Allowed"
                        onValueChange={handleDoubleAfterSplitAllowedSwitch}
                        value={doubleAfterSplitAllowed}
                    />
                    <FlatGrid
                        contentContainerStyle={styles.flatGrid}
                        itemDimension={SCREEN_WIDTH}
                        spacing={10}
                        data={Object.keys(BasicChartManager.ChartInfo)}
                        renderItem={({ item }) => {
                            return (
                                <ChartOptionButton
                                    hapticFeedback
                                    chartID={item}
                                    onPress={() => handleChartOptionButton(item)}
                                    isSelected={activeChartID === item}
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
