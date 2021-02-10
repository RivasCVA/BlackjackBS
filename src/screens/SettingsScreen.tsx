import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatGrid } from 'react-native-super-grid';
import ChartOptionButton from 'components/ChartOptionButton';
import IconButton from 'components/IconButton';
import SwitchOptionView from 'components/SwitchOptionView';
import BasicChartManager from 'models/BasicChartManager';
import Color from 'models/Color';
import Font from 'models/Font';
import { AvailableKeys } from 'models/StorageManager';

/**
 * The BlackjackBS settings screen.
 */
const SettignsScreen = (props: Props): JSX.Element => {
    const [activeChartID, setActiveChartID] = useState('');
    const [hapticFeedbackEnabled, setHapticFeedbackEnabled] = useState(false);
    const SCREEN_WIDTH = Dimensions.get('window').width;

    // Setup saved user settings
    useEffect(() => {
        const fetchSettings = async () => {
            setActiveChartID(await AvailableKeys.save_activeChartID.get());
            setHapticFeedbackEnabled(await AvailableKeys.save_hapticFeedbackEnabled.get());
        };
        fetchSettings();
    }, []);

    const handleChartOptionButton = (chartID: string) => {
        AvailableKeys.save_activeChartID.set(chartID);
        setActiveChartID(chartID);
    };

    const handleHapticFeedbackSwitch = (value: boolean) => {
        AvailableKeys.save_hapticFeedbackEnabled.set(value);
        setHapticFeedbackEnabled(value);
    };

    return (
        <LinearGradient style={styles.container} colors={Color.gradient.htmlGradient}>
            <SafeAreaView style={styles.container}>
                <IconButton
                    style={styles.closeButton}
                    icon="Close"
                    onPress={() => props.navigation.goBack(null)}
                    haptic
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
                        data={Object.keys(BasicChartManager.ChartGuide.charts)}
                        renderItem={({ item }) => {
                            return (
                                <ChartOptionButton
                                    haptic
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
