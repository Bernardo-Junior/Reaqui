import React from 'react';
import { Platform, View } from 'react-native';
import StatusBar from '../../../components/StatusBar';

// import { Container } from './styles';

const Quiz: React.FC = () => {
  return (
    <>
      {
        Platform.OS === "ios" && (
          <StatusBar />
        )
      }
    </>
  )
}

export default Quiz;