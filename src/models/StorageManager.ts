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
     * @returns string
     * @static
     */
    public getItem = async (key: keyof typeof AvailableKeys): Promise<string> => {
        try {
            const value = await AsyncStorage.getItem(AvailableKeys[key].key);
            if (value) return Promise.resolve(value);
            return Promise.reject(new Error(`Value for key ${key} could not be found!`));
        } catch (e) {
            return Promise.reject(e);
        }
    };

    /**
     * Gets the data value with the given key.
     * @param key The key holding the value.
     * @returns boolean
     * @static
     */
    public getBooleanItem = async (key: keyof typeof AvailableKeys): Promise<boolean> => {
        try {
            const value = await AsyncStorage.getItem(AvailableKeys[key].key);
            if (value) {
                if (value === 'true') return Promise.resolve(true);
                if (value === 'false') return Promise.resolve(false);
                return Promise.reject(new Error(`Could not type-cast value for key ${key} to a boolean!`));
            }
            return Promise.reject(new Error(`Value for key ${key} could not be found!`));
        } catch (e) {
            return Promise.reject(e);
        }
    };

    /**
     * Gets the data value with the given key.
     * @param key The key holding the value.
     * @returns number
     * @static
     */
    public getNumberItem = async (key: keyof typeof AvailableKeys): Promise<number> => {
        try {
            const value = await AsyncStorage.getItem(AvailableKeys[key].key);
            if (value) {
                const parsed = parseInt(value, 10);
                if (!Number.isNaN(parsed)) {
                    Promise.resolve(parsed);
                }
                return Promise.reject(new Error(`Could not type-cast value for key ${key} to a number!`));
            }
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
    public setItem = async (key: keyof typeof AvailableKeys, value: string): Promise<void> => {
        try {
            await AsyncStorage.setItem(AvailableKeys[key].key, value);
            return Promise.resolve();
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
    public setBooleanItem = async (key: keyof typeof AvailableKeys, value: boolean): Promise<void> => {
        try {
            await AsyncStorage.setItem(AvailableKeys[key].key, value ? 'true' : 'false');
            return Promise.resolve();
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
    public setNumberItem = async (key: keyof typeof AvailableKeys, value: number): Promise<void> => {
        try {
            await AsyncStorage.setItem(AvailableKeys[key].key, value.toString());
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    /**
     * Gets the default value for the given storage key.
     * @param key The storage key.
     * @returns unknown
     */
    public getDefaultValue = (key: keyof typeof AvailableKeys): unknown => {
        return AvailableKeys[key].default;
    };
}

/**
 * All storage keys avaliable to GET and SET data.
 * @summary
 * AvailableKeys may be utilized to GET and SET data for specific storage keys.
 * The literal data type is taken into account for each key's GET and SET methods.
 * You will be guaranteed a value in the GET promise (Reject will never be called).
 */
export const AvailableKeys = {
    save_activeChartID: {
        key: '@save_activeChartID',
        default: 'MDC',
        get: async (): Promise<string> => {
            try {
                const value = StorageManager.shared.getItem('save_activeChartID');
                return Promise.resolve(value);
            } catch (e) {
                console.log(e);
                return Promise.resolve(AvailableKeys.save_activeChartID.default);
            }
        },
        set: async (value: string): Promise<void> => {
            return StorageManager.shared.setItem('save_activeChartID', value);
        },
    },
    save_hapticFeedbackEnabled: {
        key: '@save_hapticFeedbackEnabled',
        default: true,
        get: async (): Promise<boolean> => {
            try {
                const value = await StorageManager.shared.getBooleanItem('save_hapticFeedbackEnabled');
                return Promise.resolve(value);
            } catch (e) {
                console.log(e);
                return Promise.resolve(AvailableKeys.save_hapticFeedbackEnabled.default);
            }
        },
        set: async (value: boolean): Promise<void> => {
            return StorageManager.shared.setBooleanItem('save_hapticFeedbackEnabled', value);
        },
    },
};
