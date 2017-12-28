import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const museum = require('./assets/museum.jpg');
const park = require('./assets/park.jpg');
const restaurant = require('./assets/restaurant.jpg');
const theater = require('./assets/theater.jpg');
const concert = require('./assets/concert.jpg');

export default class ExploreScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Explore',
    header: null
  };

  render() {

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.button}>
          <ImageBackground style={styles.image} source={museum}>
            <Text style={styles.text}>museums</Text>
          </ImageBackground>
        </View>
        <View style={styles.button}>
          <ImageBackground style={styles.image} source={park}>
            <Text style={styles.text}>parks</Text>
          </ImageBackground>
        </View>
        <View style={styles.button}>
          <ImageBackground style={styles.image} source={restaurant}>
            <Text style={styles.text}>restaurants</Text>
          </ImageBackground>
        </View>
        <View style={styles.button}>
          <ImageBackground style={styles.image} source={theater}>
            <Text style={styles.text}>theaters</Text>
          </ImageBackground>
        </View>
        <View style={styles.button}>
          <ImageBackground style={styles.image} source={concert}>
            <Text style={styles.text}>concerts</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    )

  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    width: responsiveWidth(90),
    height: responsiveHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25
  },
  contentContainer: {
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center'
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center'

  },
  text: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    margin: 20,
    backgroundColor: 'transparent'
  },
})
