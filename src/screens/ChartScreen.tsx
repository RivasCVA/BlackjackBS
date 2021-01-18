import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import IconButtonAnimated from 'components/IconButtonAnimated';
import Color from 'models/Color';
import { ScrollView } from 'react-native-gesture-handler';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const chart1Image = require('assets/charts/chart-1.png');

/**
 * A modal screen to show the active Basic Strategy Chart.
 */
const ChartScreen = (props: Props): JSX.Element => {
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
                <ScrollView
                    scrollEnabled
                    alwaysBounceHorizontal
                    bouncesZoom
                    maximumZoomScale={2}
                    minimumZoomScale={1}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.imageView}>
                        <Image style={styles.image} source={chart1Image} />
                    </View>
                </ScrollView>
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
        marginBottom: 25,
        backgroundColor: Color.casinoRed,
    },
    closeButton: {
        alignSelf: 'center',
        aspectRatio: 1,
        height: '75%',
    },
    imageView: {
        justifyContent: 'center',
        width: '100%',
        height: 575,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: Color.white,
    },
});
