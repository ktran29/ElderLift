import Amplify from 'aws-amplify-react-native';
import aws_exports from './aws-exports.js';
import React from 'react';
import { TouchableHighlight, View, Text, Button, StyleSheet } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import ExploreScreen from './ExploreScreen.js';
import ProfileScreen from './ProfileScreen.js';
import LocationScreen from './LocationScreen.js';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(aws_exports);

const NavApp = TabNavigator({
    Explore: {
      screen: ExploreScreen
    },
    Location: {
      screen: LocationScreen
    },
    Profile: {
      screen: ProfileScreen
    },
  }
)

export default withAuthenticator(NavApp);
