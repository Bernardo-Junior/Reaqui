import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Global_Container, Global_Primary, Global_Scroll, Global_styles, Global_Tertiary } from '../../../utils/global';
import StatusBar from '../../components/StatusBar';

import principal from '../../../assets/icons/principal.png';

import proveta from '../../../assets/icons/proveta.png';

import avaliacao from '../../../assets/icons/avaliacao.png';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import resp from '../../../utils/responsivity';

import { 
  Home_Container, 
  Icone_Reaqui, 
  Label_Bordao, 
  Logo_Container, 
  Menu_Container, 
  Menu_Img1, 
  Menu_Titulo1, 
  Title_Text,
  Menu_Texto1,
  Menu_img2,
  Menu_Titulo2,
  Menu_Texto2
} from './styles';

const Home: React.FC = () => {
  return (
    <> 
      {
        Platform.OS === "ios" && (
          <StatusBar />
        )
      }
      <Global_Container>
        <Global_Scroll >
          <Home_Container>
            <Logo_Container>
              <Icone_Reaqui 
                source={principal}
                resizeMode="stretch"
              />
              <Title_Text>
                Reaqui
              </Title_Text>
            </Logo_Container>
            <Label_Bordao>
              Seu aplicativo de estudos de reações químicas.
            </Label_Bordao>

            <Menu_Container style={Global_styles.shadow}>
              <Menu_Img1 source={proveta}  resizeMode="contain" />
              <Menu_Titulo1>
                Estudar reações
              </Menu_Titulo1>
              <Menu_Texto1 style={{width: "100%"}}>
                Conheça os diversos tipos de reações 
              </Menu_Texto1>
              <Menu_Texto1 style={{marginTop: 0}}>
                químicas e desenvolva seu 
              </Menu_Texto1>
              <Menu_Texto1 style={{marginTop: 0}}>
                conhecimento.
              </Menu_Texto1>

              <Ionicons 
                name="md-arrow-forward-sharp"
                color={Global_Tertiary}
                size={resp(50)}
                style={{alignSelf: 'flex-end', marginRight: resp(25)}}
              />
            </Menu_Container>

            <Menu_Container style={Global_styles.shadow}>
              <Menu_img2 
                source={avaliacao}
                resizeMode="stretch"
              />

              <Menu_Titulo2>
                Jogar Quiz
              </Menu_Titulo2>

              <Menu_Texto2>
                Pratique seu conhecimento em reações
              </Menu_Texto2>

              <Menu_Texto2  style={{marginTop: 0}}>
                quimicas, um jogo simples e intuitivo.
              </Menu_Texto2>

              <Ionicons 
                name="md-arrow-forward-sharp"
                color={Global_Tertiary}
                size={resp(50)}
                style={{alignSelf: 'flex-start', marginLeft: resp(18), marginTop: resp(15)}}
              />
            </Menu_Container>
          </Home_Container>
        </Global_Scroll>
      </Global_Container>
    </>
  );
}

export default Home;