import { Animated, Easing } from 'react-native';

/**
 * Provides basic animations from React Native's Animated framework.
 */
export default class BasicAnimation {
    /** Reference to Animated.Value type. */
    public static Value = Animated.Value;

    /**
     * Eases an Animated Value to a new value.
     * @param animatedValue The Animated Value to animate.
     * @param targetValue The value to move towards.
     * @param duration The duration of the animation.
     */
    public static easeValue = (
        animatedValue: Animated.Value,
        targetValue: number,
        duration: number
    ): Animated.CompositeAnimation => {
        return Animated.timing(animatedValue, {
            toValue: targetValue,
            duration,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        });
    };
}
