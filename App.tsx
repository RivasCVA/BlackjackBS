import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from 'screens/HomeScreen';
import BlackjackScreen from 'screens/BlackjackScreen';
import ChartGuideScreen from 'screens/ChartGuideScreen';

export default function App() {
    return <AppContainer />;
}

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
    ChartGuide: {
        screen: ChartGuideScreen,
        navigationOptions: {
            cardStyle: {
                backgroundColor: 'transparent',
            },
        },
    },
}, {
    initialRouteName: 'Blackjack',
    headerMode: 'none',
    mode: 'modal',
});

const AppContainer = createAppContainer(AppNavigator);
