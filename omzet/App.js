import React, {Component} from 'react';
import {createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'
import { Provider } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Login from './src/containers/Login'
import Report from './src/containers/Report'
import Agent from './src/containers/Agent'
import Product from './src/containers/Product'
import store from './src/store/index'

const BotttomNav = createBottomTabNavigator({
  Report: {screen : Report},
  Agent: {screen : Agent},
  Product: {screen : Product}
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let icon
      if (routeName === 'Report') {
        icon = <Ionicons name='ios-home' size={25} color={tintColor} />
      } else if (routeName === 'Agent') {
        icon = <Ionicons name='ios-home' size={25} color={tintColor} />
      } else if (routeName === 'Product') {
        icon = <Ionicons name='ios-home' size={25} color={tintColor} />
      }
      return icon
    }
  }),
  tabBarOptions: {
    activeTintColor: '#DB0047',
    inactiveTintColor: 'gray',
  },
  backBehavior: 'none',
})

const SwitchNav = createSwitchNavigator (
  { 
    Login : {screen : Login},
    Home : {screen : BotttomNav}
  },
  {
    initialRouteName: 'Login'
  }
) 

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <SwitchNav/>
      </Provider>
    );
  }
}