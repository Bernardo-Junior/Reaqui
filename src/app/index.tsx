import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Routes from '../infra/services/routes'
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <>
    <StatusBar backgroundColor="#C8D7DB" barStyle="dark-content" animated={true} />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </>
  )
}

export default App;