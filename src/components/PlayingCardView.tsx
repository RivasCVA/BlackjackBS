import React from 'react';
import { StyleSheet, View, Image, ImageSourcePropType, Animated, StyleProp, ViewStyle } from 'react-native';
import Color from 'models/Color';

/**
 * A playing card with a face image.
 */
const PlayingCardView = (props: Props): JSX.Element => {
    const { style, cardImage, offsetX = 0 } = props;

    // Checks the offsetX Props value and returns the correct style format.
    const processOffsetX = (offsetX: Props['offsetX']) => {
        if (offsetX instanceof Animated.Value) {
            return offsetX.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
            });
        }
        return `${offsetX}%`;
    };

    // Dynamic additions to the container style.
    const containerStyle = {
        ...StyleSheet.flatten([styles.container, style]),
        left: processOffsetX(offsetX),
        transform: [{ translateX: -(styles.container.width / 2) }],
    };

    return (
        <Animated.View style={containerStyle}>
            <View style={styles.cardView}>
                <Image style={styles.cardImage} source={cardImage} />
            </View>
        </Animated.View>
    );
};

export default PlayingCardView;

interface Props {
    style?: StyleProp<ViewStyle>;
    /** The face image of the playing card. */
    cardImage: ImageSourcePropType;
    /** The x-position offset of the playing card (screen percentage). */
    offsetX?: number | Animated.Value;
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        width: 172,
        height: 250,
    },
    cardView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Color.lightGray,
        backgroundColor: Color.white,
        shadowColor: Color.black,
        shadowOpacity: 0.25,
        shadowRadius: 1,
        shadowOffset: {
            width: -5,
            height: 6,
        },
        elevation: 8,
    },
    cardImage: {
        alignSelf: 'center',
        width: '95%',
        height: '95%',
        resizeMode: 'contain',
        borderRadius: 15,
    },
});
