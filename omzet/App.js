import React, { Component } from 'react';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import {Alert, AsyncStorage} from 'react-native'
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
import DailyReportScreen from './src/containers/dailyReport'
import DetailReportScreen from './src/containers/detailReport'
import SplashScreen from 'react-native-splash-screen'
import ReportMonthPie from './src/components/reportMonthPie'
import DetailReportMonth from './src/components/detailReportMonth'

const ProductStackNavigator = createStackNavigator({
  Product,
  FormProduct,
  AddProduct
})

const AgentStack = createStackNavigator({
  HomeAgent: { screen: Agent },
  AgentDetail: { screen: AgentDetail },
  AgentAdd: { screen: AgentAdd },
  AgentEdit: { screen: AgentEdit }
}, {
    initialRouteName: 'HomeAgent'
  })


const StackNavReport = createStackNavigator({
  ReportHome: {
    screen: Report
  },
  DailyReport: {
    screen: DailyReportScreen
  },
  DetailReport: {
    screen: DetailReportScreen
  },
  MonthlyReport: {
    screen: ReportMonthPie
  },
  DetailReportMonth: {
    screen: DetailReportMonth
  }

  
}, {
    initialRouteName: 'ReportHome'
  })

const BotttomNav = createBottomTabNavigator({
  Report: {
    screen: StackNavReport,
    navigationOptions: {
      title: 'Report',
      tabBarLabel: 'Report'
    }
  },
  Agent: { screen: AgentStack },
  Product: { screen: ProductStackNavigator }
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

const SwitchNav = (isSingnedIn) => {
  return createSwitchNavigator(
    {
      Home: { screen: BotttomNav },
      Login: { screen: Login }
    },
    {
      initialRouteName: isSingnedIn ? 'Home' : 'Login'
    }
  )
}

const checkSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('user')
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export default class App extends Component {
  constructor(){
    super()
    this.state = {
        isSignedIn: false,
        signInChecked: false,
      };
  }

  componentDidMount() {
    SplashScreen.hide();
    checkSignedIn()
      .then(result => {
        this.setState({isSignedIn: result, signInChecked:true})
      })
      .catch((err) => {
        Alert.alert(err)
      })
  }

  render() {
    if (!this.state.signInChecked) {
      return null;
    }
    const RootNav = SwitchNav(this.state.isSignedIn)
    return (
      <Provider store={store}>
        <RootNav />
      </Provider>
    );
  }
}