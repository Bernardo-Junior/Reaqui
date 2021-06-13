import React from 'react';
import { Platform, View } from 'react-native';
import { Global_Scroll, Global_Container, Global_styles } from '../../../../utils/global';
import StatusBar from '../../../components/StatusBar';

import iconLivro from '../../../../assets/icons/livro.png';

import {
  Header_Container,
  Header_Text,
  Header_Icon,
  Questao_Container,
  Questao_Header,
  Questao_Body,
  Pergunta_Texto,
  Titulo_Questao,
  Questao_Header_Container
} from './styles';

const Quiz: React.FC = () => {
  return (
    <>
      {
        Platform.OS === "ios" && (
          <StatusBar />
        )
      }
      <Global_Scroll style={{ backgroundColor: '#F7F7F7' }}>
        <Global_Container >
          <Header_Container>
            <Header_Icon
              source={iconLivro}
              resizeMode="stretch"
            />
            <Header_Text>
              Quiz Reaqui
            </Header_Text>
          </Header_Container>

          <Questao_Container style={Global_styles.shadow}>
            <Questao_Header >
              <Questao_Header_Container>
                <Titulo_Questao>
                  Questão 1
                </Titulo_Questao>
                <Pergunta_Texto>
                  Qual o resultado da reação A + B ?
                </Pergunta_Texto>
              </Questao_Header_Container>
            </Questao_Header>
            <Questao_Body>

            </Questao_Body>
          </Questao_Container>
        </Global_Container>
      </Global_Scroll>
    </>
  )
}

export default Quiz;