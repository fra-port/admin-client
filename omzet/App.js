import React, {Component} from 'react';
import {createSwitchNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import { Provider } from 'react-redux'
import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Login from './src/containers/Login'
import Report from './src/containers/Report'
import Agent from './src/containers/Agent'
import AgentDetail from './src/containers/AgentDetail'
import AgentAdd from './src/containers/AgentAdd'
import AgentEdit from './src/containers/AgentEdit'
import Product from './src/containers/Product'
import store from './src/store/index'
import FormProduct from './src/components/FormProduct'
import AddProduct from './src/components/AddProduct'

const ProductStackNavigator = createStackNavigator({
  Product,
  FormProduct,
  AddProduct
})

const AgentStack = createStackNavigator ({
  HomeAgent : {screen : Agent},
  AgentDetail : {screen: AgentDetail},
  AgentAdd : {screen: AgentAdd},
  AgentEdit : {screen: AgentEdit}
},{
  initialRouteName: 'HomeAgent'
})

const BotttomNav = createBottomTabNavigator({
  Report: {screen : Report},
  Agent: {screen : AgentStack},
  Product: {screen : ProductStackNavigator}
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let icon
      if (routeName === 'Report') {
        icon = <Octicons name='checklist' size={25} color={tintColor} />
      } else if (routeName === 'Agent') {
        icon = <Octicons name='organization' size={25} color={tintColor} />
      } else if (routeName === 'Product') {
        icon = <Ionicons name='ios-menu' size={25} color={tintColor} />
      }
      return icon
    }
  }),
  tabBarOptions: {
    activeTintColor: '#58B9FE',
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