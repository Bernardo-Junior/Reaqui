import React from 'react';
import { Platform, View } from 'react-native';
import { Global_Container } from '../../../utils/global';
import StatusBar from '../../components/StatusBar';

// import { Container } from './styles';

const Sobre: React.FC = () => {
  return (
    <>
      {
        Platform.OS === "ios" && (
          <StatusBar />
        )
      }
      <Global_Container>

      </Global_Container>
    </>
  )
}

export default Sobre;