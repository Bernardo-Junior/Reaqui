import React from 'react';
import { View } from 'react-native';
import { IHeader } from '../../../data/protocols/Header';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import { 
  Header_Container,
  Icon_Container,
  Title_Container,
  Title_Text
} from './styles';
import { Global_Primary, Global_Tertiary } from '../../../utils/global';

import resp from '../../../utils/responsivity';
import { useNavigation } from '@react-navigation/core';

const Header: React.FC<IHeader> = ({ title }) => {
  const { goBack } = useNavigation();
  return (
    <Header_Container>
      <Icon_Container onPress={() => { goBack() }}>
        <Ionicons 
          name="arrow-back-outline"
          color={`${Global_Tertiary}`}
          size={resp(40)}
        />
      </Icon_Container>
      <Title_Container>
        <Title_Text>
          {title}
        </Title_Text>
      </Title_Container>
    </Header_Container>
  )
}

export default Header;