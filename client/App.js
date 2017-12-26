import Amplify from 'aws-amplify-react-native';
import aws_exports from './aws-exports.js';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { withAuthenticator, API } from 'aws-amplify-react-native';

import WelcomeScreen from './WelcomeScreen.js';
import HomeScreen from './HomeScreen.js';

Amplify.configure(aws_exports);

const NavApp = StackNavigator({
    Welcome: { screen: WelcomeScreen },
    Home: { screen: HomeScreen }
});

export default withAuthenticator(NavApp);
