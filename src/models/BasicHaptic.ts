import * as Haptics from 'expo-haptics';

/**
 * A Haptic Feedback wrapper.
 */
export default class BasicHaptic {
    /** All the possible Haptic Feedback styles */
    private static HapticStyle = {
        impactLight: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        },
        impactMedium: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        },
        impactHeavy: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        },
        notificationError: () => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        },
        notificationSuccess: () => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        },
        notificationWarning: () => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        },
    };

    /**
     * Generates a haptic feedback with an optional delay.
     * @param hapticFunction The function that generate the haptic.
     * @param delay An optional haptic delay (in milliseconds).
     */
    public static generate = (haptic: keyof typeof BasicHaptic.HapticStyle, delay = 0): void => {
        const interval = setInterval(() => {
            BasicHaptic.HapticStyle[haptic]();
            clearInterval(interval);
        }, delay);
    };
}
