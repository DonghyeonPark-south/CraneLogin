import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthStackNavigator from './AuthStackNavigator';
import Loading from '../screen/Loading';

export const SwitchNavigator =  createSwitchNavigator(
  {
    Loading,
    AuthStackNavigator,
  },
  {
    initialRouteName: 'AuthStackNavigator',
  }
);

export const AppContainer = createAppContainer(SwitchNavigator);
