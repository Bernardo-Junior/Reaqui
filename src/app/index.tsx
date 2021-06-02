import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Routes from '../services/routes'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App;