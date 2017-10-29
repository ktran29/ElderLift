import React from 'react';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './Welcome.js';
import HomeScreen from './Home.js';
// import ExploreScreen from './Explore.js';
// import Profile from './Profile.js';

const NavApp = StackNavigator({
    Welcome: { screen: WelcomeScreen },
    Home: { screen: HomeScreen },
    // Explore: { screen: ExploreScreen },
    // Profile: { screen: ProfileScreen }
});

export default class App extends React.Component {
    render() {
        return <NavApp />;
    }
}
