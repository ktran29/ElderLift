import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen.js';

const NavApp = StackNavigator({
    Home: { screen: HomeScreen }
});

export default NavApp;
