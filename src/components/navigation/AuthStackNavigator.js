import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screen/Login';
import Signup from '../screen/Signup';

const StackNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
  },
  {
    initialRouteName: 'Login',
  }
);

export default StackNavigator;
