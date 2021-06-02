import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from '../../presentation/pages/Home/index';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}
      initialRouteName="Perfil"
    >
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
}

export default Routes;

