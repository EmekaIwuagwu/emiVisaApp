import React from 'react';
import {TouchableOpacity} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import VisaApplication from './src/VisaApplication';
import Dashboard from './src/Dashboard';
import SplashScreen from './src/SplashScreen';

const VisaApplicationNavigator = createStackNavigator({
  'Visa Application': {screen: VisaApplication,
    navigationOptions: ({navigation}) => ({
    headerLeft: () => (
    <TouchableOpacity
    style={{marginLeft: 20}}
    onPress={() => navigation.toggleDrawer()}>
    <Icon name="indent" size={25} /></TouchableOpacity>
    )})
    },
    'Visa Application': {screen: VisaApplication}
});

const DashboardNavigator = createStackNavigator({
  'Dashboard': {screen: Dashboard,
    navigationOptions: ({navigation}) => ({
    headerLeft: () => (
    <TouchableOpacity
    style={{marginLeft: 20}}
    onPress={() => navigation.toggleDrawer()}>
    <Icon name="indent" size={25} /></TouchableOpacity>
    )})
    },
    'Dashboard': {screen: Dashboard}
});

const DrawerNavigator = createDrawerNavigator({
  VisaApplication:{
    navigationOptions: {
      drawerLabel: 'Visa Application',
    },
    screen: VisaApplicationNavigator
  },
  Dashboard:{
    navigationOptions:{
      drawerLabel: 'Dashboard',
    },
    screen: DashboardNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  'Splash' : {screen : SplashScreen},
  'Drawer' : {screen : DrawerNavigator}
},
{
  initialRouteName : 'Splash'
})

const App = createAppContainer(AppSwitchNavigator);
export default App;
