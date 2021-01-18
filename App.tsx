import React, { useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FontsAvailable } from 'models/Font';

import HomeScreen from 'screens/HomeScreen';
import BlackjackScreen from 'screens/BlackjackScreen';
import ChartScreen from 'screens/ChartScreen';
import SettignsScreen from 'screens/SettingsScreen';

const App = (): JSX.Element => {
    const [dataLoaded, setDataLoaded] = useState(false);

    // Fetch all data before loading app
    useEffect(() => {
        const startAsync = async () => {
            await fetchFonts();
            setDataLoaded(true);
        }
        startAsync();
    }, []);

    // Close all console calls in production
    useEffect(() => {
        if (!__DEV__) {
            console.log = () => {};
            console.error = () => {};
        }
    }, [])

    return dataLoaded ? <AppContainer /> : <AppLoading />
}

export default App;

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Blackjack: {
        screen: BlackjackScreen,
        navigationOptions: {
            gestureEnabled: false,
        },
    },
    Settings: {
        screen: SettignsScreen,
        navigationOptions: {
            gestureEnabled: false,
        },
    },
    Chart: {
        screen: ChartScreen,
        navigationOptions: {
            cardStyle: {
                backgroundColor: 'transparent',
            },
        },
    },
}, {
    headerMode: 'none',
    mode: 'modal',
});

const AppContainer = createAppContainer(AppNavigator);

const fetchFonts = () => {
    return Font.loadAsync(FontsAvailable);
};
