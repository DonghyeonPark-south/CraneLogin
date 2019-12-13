import { createStackNavigator } from 'react-navigation-stack';

import Search from '../screen/Search';
import MainTabNavigator, { MainTabNavigationOptions } from '../navigation/MainTapNavigator';

export default createStackNavigator(
  {
    MainTabNavigator:{
      screen: MainTabNavigator,
      navigationOptions: MainTabNavigationOptions,
    },
    Search,
  },
);

