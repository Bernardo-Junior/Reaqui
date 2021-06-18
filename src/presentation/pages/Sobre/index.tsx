import React from 'react';
import { Platform, View } from 'react-native';
import { Global_Container, Global_Scroll, Global_Secundary, Global_styles, Global_Tertiary } from '../../../utils/global';
import Header from '../../components/Header';
import StatusBar from '../../components/StatusBar';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import resp from '../../../utils/responsivity';

import iconLogo from '../../../assets/icons/Icon.png';

import { 
  Header_Container,
  Header_Label,
  Icon,
  Text_Sobre,
  Button_Politica,
  Button_Text
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Sobre: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <>
      {
        Platform.OS === "ios" && (
          <StatusBar />
        )
      }
      <Global_Container>
        <Header_Container>
          <Header_Label>Sobre</Header_Label>
        </Header_Container>
        <Global_Scroll>
          <Icon
            source={iconLogo}
          />
          <Text_Sobre>
            Software educacional desenvolvido por Ajanildo Soares Cortez Filho durante a disciplina
            Trabalho de Conclusão de Curso do curso de Engenharia de Software do Instituto de Ciências Exatas
            e Tecnologia (ICET/UFAM), sob a orientação do Professor Dr. Rainer Xavier de Amorim.
          </Text_Sobre>

          <Button_Politica 
            style={Global_styles.shadow}
            onPress={() => { navigate('TermosDeUso') }}
          >
            <Ionicons 
              name="document-text-outline"
              size={resp(35)}
              color={"#FFFFFF"}
              style={Global_styles.shadow}
            />
            <Button_Text>
              Termos de Uso
            </Button_Text>
          </Button_Politica>

          
        </Global_Scroll>
      </Global_Container>
   </>
  )
}

export default Sobre;