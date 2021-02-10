import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';
import BasicStrategyChart from 'components/BasicStrategyChart';
import IconButtonAnimated from 'components/IconButtonAnimated';
import BasicAnimation from 'models/BasicAnimation';
import { AvailableKeys } from 'models/StorageManager';
import BasicChartManager from 'models/BasicChartManager';
import Color from 'models/Color';
import Font from 'models/Font';

/**
 * A modal screen to show the active Basic Strategy Chart.
 */
const ChartScreen = (props: Props): JSX.Element => {
    const [chartID, setChartID] = useState<string>('');
    const [chartDetails, setChartDetails] = useState<{ [key: string]: string }>({});
    const contentOpacity = new BasicAnimation.Value(0);

    // Did Mount
    useEffect(() => {
        AvailableKeys.save_activeChartID.get().then((chartID) => {
            setChartID(chartID);
            setChartDetails(BasicChartManager.getChartDetailsFromID(chartID));
            BasicAnimation.easeValue(contentOpacity, 1, 500).start();
        });
    }, [contentOpacity]);

    const getContent = () => {
        if (chartID.length === 0) return <View />;
        return (
            <Animated.View style={{ flex: 1, opacity: contentOpacity }}>
                <ScrollView
                    scrollEnabled
                    bouncesZoom
                    maximumZoomScale={2}
                    minimumZoomScale={1}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.chartTitle}>{chartDetails.title}</Text>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.chartDetails}>Dealer Stands: {chartDetails.dealerStands}</Text>
                        <Text style={styles.chartDetails}>Decks: {chartDetails.decks}</Text>
                    </View>
                    <BasicStrategyChart style={styles.chart} chartID={chartID} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 50 }}>
                        <View style={{ alignSelf: 'center' }}>
                            {getExampleCell('S', 'Stand', Color.chartGreen)}
                            {getExampleCell('H', 'Hit', Color.chartYellow)}
                            {getExampleCell('SP', 'Split', Color.chartBlue)}
                            {getExampleCell('D', 'Double Down', Color.chartRed)}
                        </View>
                        <View style={styles.axisDescriptorContainer}>
                            <Text style={styles.axisDescriptorText}>X-Axis: Dealer Up-Card</Text>
                            <Text style={styles.axisDescriptorText}>Y-Axis: Player Cards</Text>
                        </View>
                    </View>
                </ScrollView>
            </Animated.View>
        );
    };

    const getExampleCell = (symbol: string, text: string, color: string) => {
        return (
            <View style={styles.exampleCell}>
                <View style={[styles.exampleCellBlock, { backgroundColor: color }]}>
                    <Text style={styles.exampleCellSymbol}>{symbol}</Text>
                </View>
                <Text style={styles.exampleCellText}>{text}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <View style={styles.bar}>
                    <IconButtonAnimated
                        style={styles.closeButton}
                        icon="PullDown"
                        onPress={() => props.navigation.goBack(null)}
                    />
                </View>
                {getContent()}
            </View>
        </View>
    );
};

export default ChartScreen;

type Props = NavigationStackScreenProps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    view: {
        width: '100%',
        height: '94%',
        backgroundColor: Color.white,
    },
    bar: {
        justifyContent: 'center',
        width: '100%',
        height: 50,
        backgroundColor: Color.casinoRed,
    },
    closeButton: {
        alignSelf: 'center',
        aspectRatio: 1,
        height: '75%',
    },
    chartTitle: {
        textAlign: 'center',
        fontFamily: Font('Poppins-Medium'),
        fontSize: 20,
        marginTop: 10,
    },
    chartDetails: {
        textAlign: 'center',
        fontFamily: Font('Rubik-Regular'),
        fontSize: 14,
    },
    chart: {
        paddingTop: 10,
        paddingBottom: 20,
    },
    exampleCell: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    exampleCellBlock: {
        justifyContent: 'center',
        alignContent: 'center',
        width: 28,
        height: 28,
        backgroundColor: Color.white,
    },
    exampleCellSymbol: {
        textAlign: 'center',
        fontFamily: Font('Poppins-Medium'),
    },
    exampleCellText: {
        textAlign: 'center',
        fontFamily: Font('Poppins-Medium'),
        marginLeft: 5,
    },
    axisDescriptorContainer: {
        alignSelf: 'center',
    },
    axisDescriptorText: {
        fontFamily: Font('Rubik-Regular'),
        fontSize: 14,
        paddingVertical: 5,
    },
});
