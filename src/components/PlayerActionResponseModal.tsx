import React, { useEffect } from 'react';
import { StyleSheet, Modal, View, StyleProp, ViewStyle } from 'react-native';
import LottieView from 'lottie-react-native';
import Color, { HexToRGB } from 'models/Color';
import BasicAnimation from 'models/BasicAnimation';

/**
 * A modal displaying an animated icon depicting player action reponse.
 */
const PlayerActionResponseModal = (props: Props): JSX.Element => {
    const { style, responseIcon, responseIconStyle, visible, animationDuration = 1250 } = props;
    const animationProgess = new BasicAnimation.Value(0);

    // Play the animation upon showing the modal
    useEffect(() => {
        const replayAnimation = () => {
            animationProgess.setValue(0.0);
            // Customize the animation speed for specific animation files
            let duration: number;
            switch (responseIcon) {
                case 'Correct':
                    duration = 1.25 * animationDuration;
                    break;
                default:
                    duration = animationDuration;
            }
            BasicAnimation.easeValue(animationProgess, 1.0, duration).start();
        };
        if (visible) replayAnimation();
    }, [animationProgess, animationDuration, responseIcon, visible]);

    return (
        <Modal visible={visible} animationType="fade" transparent>
            <View style={StyleSheet.flatten([styles.container, style])}>
                <LottieView
                    style={StyleSheet.flatten([styles.icon, responseIconStyle])}
                    source={ResponseIcon[responseIcon]}
                    progress={animationProgess}
                />
            </View>
        </Modal>
    );
};

export default PlayerActionResponseModal;

interface Props {
    /** The style of the modal view. */
    style?: StyleProp<ViewStyle>;
    /** The animated response icon to render. */
    responseIcon: keyof typeof ResponseIcon;
    /** The style of the reponse icon. */
    responseIconStyle?: StyleProp<ViewStyle>;
    /** When true, the modal displays over the current screen. */
    visible: boolean;
    /** The icon animation duration (in milliseconds). */
    animationDuration?: number;
}

/**
 * The player action response type corresponding to available icons.
 */
export const ResponseIcon = {
    Correct: require('assets/animations/correct-mark.json'),
    Wrong: require('assets/animations/wrong-mark.json'),
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: HexToRGB(Color.black, 0.5),
    },
    icon: {
        width: 100,
        height: 100,
    },
});
