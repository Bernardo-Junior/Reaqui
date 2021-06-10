import React from 'react';
import { Image, View } from 'react-native';
import { IHeader } from '../../../data/protocols/Header';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

import { 
  Header_Container,
  Icon_Container,
  Title_Container,
  Title_Text
} from './styles';
import { Global_Primary, Global_Tertiary } from '../../../utils/global';

import iconeTubo from '../../../assets/icons/tubo_de_ensaio.png';

import resp from '../../../utils/responsivity';
import { useNavigation } from '@react-navigation/core';

const HeaderReacoes: React.FC<IHeader> = ({ title }) => {
  const { goBack } = useNavigation();
  return (
    <Header_Container>
      <Icon_Container onPress={() => { goBack() }}>
        <FontAwesome 
          name="angle-left"
          color={`#FFFFFF`}
          size={resp(45)}
        />
      </Icon_Container>
      <Image 
        source={iconeTubo}
        style={{width: resp(60), height: resp(60)}}
        resizeMode="stretch"
      />
      <Title_Container>
        <Title_Text>
          {title}
        </Title_Text>
      </Title_Container>
    </Header_Container>
  )
}

export default HeaderReacoes;