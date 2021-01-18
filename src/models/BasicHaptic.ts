import * as Haptics from 'expo-haptics';
import StorageManager from 'models/StorageManager';

/**
 * A Haptic Feedback wrapper.
 * @static All Methods
 */
export default class BasicHaptic {
    // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
    private constructor() {}

    /**
     * All the possible Haptic Feedback styles.
     * @static
     */
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
     * NOTE: Does not generate if user opts out of haptic feedback.
     * @param hapticFunction The function that generate the haptic.
     * @param delay An optional haptic delay (in milliseconds).
     * @static
     */
    public static generate = (haptic: keyof typeof BasicHaptic.HapticStyle, delay = 0): void => {
        StorageManager.shared
            .getItem('save_hapticFeedbackEnabled')
            .then((value) => {
                if (value === 'true') {
                    const interval = setInterval(() => {
                        BasicHaptic.HapticStyle[haptic]();
                        clearInterval(interval);
                    }, delay);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
}
