import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    StyleProp,
    ViewStyle,
    GestureResponderEvent,
} from 'react-native';
import Font from 'models/Font';
import Color from 'models/Color';
import BasicHaptic from 'models/BasicHaptic';

// Import the chart data.
import * as ChartData from 'assets/charts/chart.json';

/**
 * A button styled to select a Basic Strategy Chart.
 */
const ChartOptionButton = (props: Props): JSX.Element => {
    const { style, chartID, onPress, isSelected = false, haptic = false } = props;
    const chart = ChartData.charts.find((chart) => chart.id === chartID);

    const handleOnPress = (event: GestureResponderEvent) => {
        onPress(event);
        if (haptic) BasicHaptic.generate('impactLight');
    };

    if (!chart) return <Text>Chart Not Found!</Text>;

    return (
        <TouchableOpacity
            style={StyleSheet.flatten([styles.container, style, isSelected ? styles.selected : {}])}
            onPress={handleOnPress}
            activeOpacity={0.85}
        >
            <Text style={styles.title}>{chart.title}</Text>
            <View style={styles.details}>
                <View style={styles.detailsContent}>
                    <Text style={styles.detailsTitle}>Dealer-Stands:</Text>
                    <Text style={styles.detailsText}>{chart.dealerStands}</Text>
                </View>
                <View style={styles.detailsContent}>
                    <Text style={styles.detailsTitle}>Decks:</Text>
                    <Text style={styles.detailsText}>{chart.decks}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ChartOptionButton;

interface Props {
    style?: StyleProp<ViewStyle>;
    /**
     * The ID of the Basic Strategy Chart data to display.
     * @see chart.json.
     */
    chartID: string;
    onPress: (event: GestureResponderEvent) => void;
    /** When true, the styling of the button changes to symbolize selection. */
    isSelected?: boolean;
    /** Enable haptic feedback. */
    haptic?: boolean;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 5,
        width: '100%',
        height: 85,
        backgroundColor: Color.casinoOrange,
        borderRadius: 16,
        borderColor: Color.lightGray,
        borderWidth: 3,
        shadowColor: Color.black,
        shadowOpacity: 0.65,
        shadowRadius: 3,
        shadowOffset: {
            width: -5,
            height: 2,
        },
    },
    selected: {
        borderColor: Color.white,
        shadowColor: Color.white,
        shadowOpacity: 0.75,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    title: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: Font('Poppins-Bold'),
        fontSize: 18,
        color: Color.white,
    },
    details: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContent: {
        flexDirection: 'row',
        marginVertical: 1,
    },
    detailsTitle: {
        fontFamily: Font('Poppins-Bold'),
        fontSize: 14,
        color: Color.white,
    },
    detailsText: {
        fontFamily: Font('Poppins-Medium'),
        fontSize: 14,
        color: Color.white,
        paddingLeft: 5,
    },
});
