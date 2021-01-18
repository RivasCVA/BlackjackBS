import { Animated, Easing } from 'react-native';

/**
 * Provides basic animations from React Native's Animated framework.
 * @static All Methods
 */
export default class BasicAnimation {
    // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
    private constructor() {}

    /**
     * Reference to Animated.Value type.
     * @static
     */
    public static Value = Animated.Value;

    /**
     * Eases an Animated Value to a new value.
     * @param animatedValue The Animated Value to animate.
     * @param targetValue The value to move towards.
     * @param duration The duration of the animation.
     * @static
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
