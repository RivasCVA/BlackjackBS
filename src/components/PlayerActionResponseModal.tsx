import React, { useEffect } from 'react';
import { StyleSheet, Modal, View, StyleProp, ViewStyle } from 'react-native';
import LottieView from 'lottie-react-native';
import Color, { ColorToRGB } from 'models/Color';
import BasicAnimation from 'models/BasicAnimation';

// Import animated files
import correctMark from 'assets/animations/correct-mark.json';
import wrongMark from 'assets/animations/wrong-mark.json';

/**
 * A Modal displaying an animation of a Player action reponse.
 */
const PlayerActionResponseModal = (props: Props): JSX.Element => {
    const { style, iconStyle, actionReponse: responseType, visible, animationDuration = 1250 } = props;
    const animationProgess = new BasicAnimation.Value(0);

    // Play animation upon showing modal
    useEffect(() => {
        const replayAnimation = () => {
            animationProgess.setValue(0.0);
            // Customize animation speed for specific animation files
            let duration: number;
            switch (responseType) {
                case PlayerActionResponse.CORRECT:
                    duration = 1.25 * animationDuration;
                    break;
                default:
                    duration = animationDuration;
            }
            BasicAnimation.easeValue(animationProgess, 1.0, duration).start();
        };
        if (visible) replayAnimation();
    }, [animationProgess, animationDuration, responseType, visible]);

    /**
     * Retrieves the correct animation file based on the Action Response.
     * @param responseType The Player's Action Response.
     */
    const getAnimationSource = (responseType: PlayerActionResponse) => {
        switch (responseType) {
            case PlayerActionResponse.CORRECT:
                return correctMark;
            case PlayerActionResponse.WRONG:
                return wrongMark;
            default:
                return correctMark;
        }
    };

    return (
        <Modal visible={visible} animationType="fade" transparent>
            <View style={StyleSheet.flatten([styles.container, style])}>
                <LottieView
                    style={StyleSheet.flatten([styles.icon, iconStyle])}
                    source={getAnimationSource(responseType)}
                    progress={animationProgess}
                />
            </View>
        </Modal>
    );
};

export default PlayerActionResponseModal;

interface Props {
    style?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<ViewStyle>;
    actionReponse: PlayerActionResponse;
    visible: boolean;
    animationDuration?: number;
}

/**
 * The player action response type corresponding to available icons.
 */
export enum PlayerActionResponse {
    CORRECT,
    WRONG,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorToRGB(Color.black, 0.5),
    },
    icon: {
        width: 100,
        height: 100,
    },
});
