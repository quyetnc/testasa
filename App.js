// In App.js in a new project

import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends React.Component {
  render() {
    AsyncStorage.setItem('IDToken', '1324124141234324324324234');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Scr2"
          onPress={() => this.props.navigation.navigate('Home2')}
        />
      </View>
    );
  }
}

class HomeScreen2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myvl: null,
    };
  }
  AsyncStorage;
  render() {
    AsyncStorage.getItem('IDToken').then((myvalue) => {
      this.setState({myvl: myvalue});
    });
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home2 Screen</Text>
        {
          this.state.myvl === null ? <Text>Khong Co</Text> : <Text>{this.state.myvl}</Text>
        }
        <Button
          title="Scr2"
          onPress={() => this.props.navigation.push('Detail')}
        />
      </View>
    );
  }
}

class Detail extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Home2: {
    screen: HomeScreen2,
  },
  Detail: {
    screen: Detail,
  },
});

export default createAppContainer(AppNavigator);
