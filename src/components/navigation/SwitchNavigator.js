import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../screen/Login';
import Signup from '../screen/Signup';

export const SwitchNavigator =  createSwitchNavigator(
  {
    Login,
    Signup,
  },
  {
    initialRouteName: 'Login',
  }
);

export const AppContainer = createAppContainer(SwitchNavigator);
