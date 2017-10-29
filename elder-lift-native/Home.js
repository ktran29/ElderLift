import React from 'react';
import { View, Text, TouchableWithoutFeedback, Button } from 'react-native';
import { DrawerNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import ExploreScreen from './Explore.js';
import ProfileScreen from './Profile.js';
import LocationsScreen from './Locations.js';


const TabApp = TabNavigator({
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name='md-compass'
            size={30}
            style={{ color: tintColor}}
          />
        )
      }
    },
    Locations: {
      screen: LocationsScreen,
      navigationOptions: {
        tabBarLabel: 'Locations',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name='md-map'
            size={30}
            style={{ color: tintColor}}
          />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name='md-person'
            size={30}
            style={{ color: tintColor}}
          />
        )
      }
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: '#ff3ac7',
    },
    initialRouteName: 'Locations'
  }
)


export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  render() {

    const { navigate } = this.props.navigation;

    return <TabApp />
  }
}
