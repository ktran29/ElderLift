import React from 'react';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './WelcomeScreen.js';
import HomeScreen from './HomeScreen.js';


const NavApp = StackNavigator({
    Welcome: { screen: WelcomeScreen },
    Home: { screen: HomeScreen }
});

export default NavApp;
