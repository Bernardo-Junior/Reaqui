import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Global_Container, Global_styles } from '../../../utils/global';
import StatusBar from '../../components/StatusBar';

import { 
  Home_Container, Icone_Reaqui, Label_Bordao, Logo_Container, Menu_Container, Title_Text
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
        <Home_Container>
          <Logo_Container>
            <Icone_Reaqui />
            <Title_Text>
              Reaqui
            </Title_Text>
          </Logo_Container>
          <Label_Bordao>
            Seu aplicativo de estudos de reações químicas.
          </Label_Bordao>

          <Menu_Container style={Global_styles.shadow}>

          </Menu_Container>

          <Menu_Container style={Global_styles.shadow}>

          </Menu_Container>
        </Home_Container>
      </Global_Container>
    </>
  );
}

export default Home;