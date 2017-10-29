import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet} from 'react-native';

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>profile</Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff3ac7',
    width: 200,
    borderRadius: 40
  },
  buttonText: {
    color: 'white',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'sans-serif'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100,
    paddingBottom: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 60,
    color: '#ff3ac7',
    fontFamily: 'sans-serif'
  },
  touch: {
    borderRadius: 40
  }
})
