import React from 'react';
import {Platform, Text, View} from 'react-native';
import StatusBar from '../../../../../components/StatusBar';
import {
  Global_Container,
  Global_Primary,
  Global_Scroll,
} from '../../../../../../utils/global';
import HeaderReacoes from '../../../../../components/Header_Reacoes';
import {Conteudo_Container} from '../../styles';
import {Adicao_Container} from '../Adicao/styles';
import {
  Formula_Text,
  Imagem,
  Imagem_Container,
  Imagem_Legenda,
  Texto,
} from '../Decomposicao/styles';

import imagem1 from '../../../../../../assets/Imagens/Eliminacao/intermolecular1.png';
import imagem2 from '../../../../../../assets/Imagens/Eliminacao/intermolecular2.png';
import imagem3 from '../../../../../../assets/Imagens/Eliminacao/intramolecular1.png';
import imagem4 from '../../../../../../assets/Imagens/Eliminacao/intramolecular2.png';


// import { Container } from './styles';
import resp from '../../../../../../utils/responsivity';

const Eliminacao: React.FC = () => {
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar />}
      <Global_Scroll>
        <HeaderReacoes title="Reações de Eliminação" />
        <Global_Container style={{backgroundColor: Global_Primary}}>
          <Adicao_Container>
            <Conteudo_Container
              style={{
                flex: 1,
                alignSelf: 'center',
                backgroundColor: '#FFFFFF',
                justifyContent: 'flex-start',
              }}>
                <Texto>
                Nesse tipo de reação, a partir de um único composto, são obtidos outros dois, um orgânico e um inorgânico. Veja alguns exemplos de reações orgânicas de eliminação:
                {`\n\n`}<Text style={{fontWeight: 'bold'}}>Eliminação intramolecular:</Text> uma molécula elimina alguns de seus átomos. Genericamente, temos:
                </Texto>

              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem3}
                  resizeMode="stretch"
                  style={{height: resp(110), width: resp(350), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
              Um exemplo é a desidratação intramolecular de álcoois, na presença de um catalisador, em temperaturas altas (pelo menos 170ºC), formando um alceno e liberando água:
              {`\n\n`}Exemplo: Desidratação do etanol:
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem4}
                  resizeMode="stretch"
                  style={{height: resp(150), width: resp(350), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
              Eliminação intermolecular: Duas moléculas interagem, unem-se e eliminam simultaneamente um átomo ou grupo de átomos, sendo, de certa forma, o caminho inverso das reações de adição.
              {`\n\n`}Genericamente, temos:
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem1}
                  resizeMode="stretch"
                  style={{height: resp(90), width: resp(350), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
              Os principais exemplos de eliminações intermoleculares são: desidratação intermolecular de álcoois, desidratação de ácidos carboxílicos, eliminação de haletos orgânicos, de hidrogênios e de halogênios.
              {`\n\n`}Abaixo temos um exemplo de eliminação de hidrogênios de um alcano, com a formação de um alceno e gás hidrogênio:
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem2}
                  resizeMode="stretch"
                  style={{height: resp(120), width: resp(250), marginTop: 0}}
                />
              </Imagem_Container>
              </Conteudo_Container>
          </Adicao_Container>
        </Global_Container>
      </Global_Scroll>
    </>
  );
};

export default Eliminacao;
