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
import BasicChartManager from 'models/BasicChartManager';
import Font from 'models/Font';
import Color from 'models/Color';
import BasicHaptic from 'models/BasicHaptic';

/**
 * A button styled to select a Basic Strategy Chart.
 */
const ChartOptionButton = (props: Props): JSX.Element => {
    const { style, chartID, onPress, isSelected = false, haptic = false } = props;
    const chart = Object(BasicChartManager.ChartGuide.charts)[chartID];

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
    /** The ID of the Basic Strategy Chart data to display. */
    chartID: string;
    /** Triggers on button press. */
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
        borderRadius: 14,
        borderColor: Color.white,
        borderWidth: 3,
        shadowColor: Color.black,
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    selected: {
        backgroundColor: Color.leafGreen,
    },
    title: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: Font('Poppins-Medium'),
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
        fontFamily: Font('Poppins-Regular'),
        fontSize: 14,
        color: Color.white,
    },
    detailsText: {
        fontFamily: Font('Poppins-Regular'),
        fontSize: 14,
        color: Color.white,
        paddingLeft: 5,
    },
});
