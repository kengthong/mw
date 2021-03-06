import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MealWheel from '../screens/MealWheel';
import WheelsListScreen from '../screens/WheelsListScreen';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WheelHome from '../screens/WheelHome';
import HistoryScreen from '../screens/HistoryScreen';

const WheelsListStack = createStackNavigator({
  WheelsList: { screen: WheelsListScreen },
  Links: {screen : LinksScreen}
  // Settings: { screen: SettingsScreen }
})

WheelsListStack.navigationOptions = {
  tabBarLabel: 'Wheels List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
        ? `ios-information-circle${focused ? '' : '-outline'}`
        : 'md-information-circle'
      }
      />
  )
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const HistoryStack = createStackNavigator({
  History: HistoryScreen,
});

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-filing' : 'md-filing'}
    />
  ),
};


// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

const WheelHomeStack = createStackNavigator({
  WheelHome: { screen: WheelHome}
});

WheelHomeStack.navigationOptions = {
  tabBarLabel: 'Wheel Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  WheelHomeStack,
  WheelsListStack,
  //HomeStack,
//   LinksStack,
  HistoryStack,
  //SettingsStack,
});
