import React from 'react';
import { Platform, View } from 'react-native';
import { Global_Container, Global_Scroll } from '../../../../utils/global';
import Header from '../../../components/Header';
import StatusBar from '../../../components/StatusBar';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import resp from '../../../../utils/responsivity';

import {
  Button_Container,
  Button_Left_Container,
  Button_Right_Container,
  Conteudo_Container,
  Descricao_Text,
  Hr,
  Title_Text,
  Title_Topico,
  Button_Left_Text,
  Icon_Container
} from './styles';

const Estudar: React.FC = () => {
  return (
    <>
      {
        Platform.OS === "ios" && (
          <StatusBar />
        )
      }
      <Header title="Estudar Reações" />
      <Global_Scroll>
        <Global_Container style={{ alignItems: 'center', marginBottom: resp(30) }}>

          <Conteudo_Container>
            <Title_Text>
              Reações Químicas
              </Title_Text>

            <Hr />
            <Descricao_Text>
              As reações químicas são o resultado da transformação que ocorre nas substâncias, onde os átomos rearranjam-se modificando seu estado inicial.
              Assim, os compostos químicos sofrem alterações gerando novas moléculas. Por sua vez, os átomos dos elementos permanecem inalterados.
              </Descricao_Text>

            <Title_Text>
              Reações Orgânicas
              </Title_Text>

            <Hr />
            <Descricao_Text>
              Reações orgânicas são as reações que acontecem entre compostos orgânicos. Há vários tipos de reações, que ocorrem mediante a quebra de moléculas dando origem a novas ligações.
              {`\n`}{`\n`}Muito utilizadas na indústria, é a partir delas que podem ser produzidos medicamentos e produtos de cosmética, plásticos, dentre tantas outras coisas.
              {`\n`}{`\n`}Os principais tipos de reações orgânicas são:
              {`\n\n\t`}  •	Reação de adição
              {`\n\t`}  •	Reação de substituição
              {`\n\t`}  •	Reação de eliminação
              {`\n\t`}  •	Reação de oxidação
            </Descricao_Text>
            <Title_Topico>
              Tipos de reações:
            </Title_Topico>

            <Button_Container>
              <Button_Left_Container>
                <Icon_Container>

                </Icon_Container>
                <Button_Left_Text>
                  Reações em síntese ou adição
                </Button_Left_Text>
              </Button_Left_Container>
              <Button_Right_Container>
                <FontAwesome 
                  name="angle-right"
                  size={resp(50)}
                  color="#FFFFFF"
                />
              </Button_Right_Container>
            </Button_Container>
          </Conteudo_Container>
        </Global_Container>
      </Global_Scroll>
    </>
  )
}

export default Estudar;