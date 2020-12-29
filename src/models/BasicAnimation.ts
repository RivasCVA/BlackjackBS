import { Animated, Easing } from 'react-native';

/**
 * Provides basic animations from React Native's Animated framework.
 */
export default class BasicAnimation {
    /** Reference to Animated.Value type. */
    public static Value = Animated.Value;

    /**
     * Eases an Animated Value to a new value.
     * @param val The Animated Value to animate.
     * @param newVal The value to move towards.
     * @param duration The duration of the animation.
     */
    public static easeValue = (val: Animated.Value, newVal: number, duration: number): Animated.CompositeAnimation => {
        return Animated.timing(val, {
            toValue: newVal,
            duration,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        });
    };
}
