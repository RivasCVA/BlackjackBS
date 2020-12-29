import React from 'react';
import { StyleSheet, Image, ImageSourcePropType, Animated } from 'react-native';
import Color from '../constants/Color';

/**
 * A basic playing card JSX Component.
 */
export default function CardView(props: Props): JSX.Element {
    const { cardImage, offsetX } = props;

    /**
     * Checks the Props.offsetX value and processes its format.
     * @param offsetX The Props offsetX value.
     * @param defaultOffsetX The default offsetX value.
     * @returns The correct Style format.
     */
    const processOffsetX = (offsetX: Props['offsetX']) => {
        if (offsetX instanceof Animated.Value) {
            return offsetX.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
            });
        }
        return `${offsetX}%`;
    };

    /**
     * Dynamic additions to the cardView style.
     */
    const cardViewStyle = {
        ...styles.cardView,
        left: processOffsetX(offsetX),
        transform: [{ translateX: -(styles.cardView.width / 2) }],
    };

    return (
        <Animated.View style={cardViewStyle}>
            <Image style={styles.cardImage} source={cardImage} />
        </Animated.View>
    );
}

interface Props {
    /** The face image of the playing card. */
    cardImage: ImageSourcePropType;
    /** The x-position offset of the playing card (screen percentage). */
    offsetX?: number | Animated.Value;
}

const defaultProps: Partial<Props> = {
    offsetX: 0,
};

CardView.defaultProps = defaultProps;

const styles = StyleSheet.create({
    cardView: {
        position: 'absolute',
        justifyContent: 'center',
        width: 172,
        height: 250,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Color.lightGray,
        backgroundColor: Color.white,
    },
    cardImage: {
        alignSelf: 'center',
        width: 160,
        height: 240,
        resizeMode: 'contain',
    },
});
