import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Manages the GET and SET of data using Async Storage.
 * @yields Singleton (shared)
 */
export default class StorageManager {
    /**
     * A singleton instance.
     * @static
     */
    public static shared = new StorageManager();

    // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
    private constructor() {}

    /**
     * Gets the data value with the given key.
     * @param key The key holding the value.
     * @static
     */
    public getItem = async (key: keyof typeof availableKeys): Promise<string> => {
        try {
            const value = await AsyncStorage.getItem(availableKeys[key]);
            if (value) return Promise.resolve(value);
            return Promise.reject(new Error(`Value for key ${key} could not be found!`));
        } catch (e) {
            return Promise.reject(e);
        }
    };

    /**
     * Stores the given value with the given key.
     * @param key The key to hold the value.
     * @param value The value to store.
     * @static
     */
    public setItem = async (key: keyof typeof availableKeys, value: string): Promise<void> => {
        try {
            await AsyncStorage.setItem(availableKeys[key], value);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };
}

/**
 * All storage keys avaliable to get and set data.
 */
const availableKeys = {
    save_activeChartID: '@save_activeChartID',
    save_hapticFeedbackEnabled: '@save_hapticFeedbackEnabled',
};
