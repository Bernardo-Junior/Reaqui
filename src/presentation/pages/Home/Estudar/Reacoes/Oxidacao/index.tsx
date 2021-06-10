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

import imagem1 from '../../../../../../assets/Imagens/Oxidacao/Exemplo1.png';
import imagem2 from '../../../../../../assets/Imagens/Oxidacao/Exemplo2.png';
import imagem3 from '../../../../../../assets/Imagens/Oxidacao/Exemplo3.png';


// import { Container } from './styles';
import resp from '../../../../../../utils/responsivity';

const Oxidacao: React.FC = () => {
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar />}
      <Global_Scroll>
        <HeaderReacoes title="Reações de Exidação" />
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
                A reação de oxidação, também chamada de oxirredução, acontece quando há ganho ou perda de elétrons. A reação de oxidação, também chamada de oxirredução, acontece quando há ganho ou perda de elétrons.
                {`\n\n`}<Text style={{fontWeight: 'bold'}}>Exemplos de reações de oxidação</Text>
                {`\n\n`}<Text style={{fontWeight: 'bold'}}>Exemplo 1:</Text> oxidação enérgica dos alcenos.
               </Texto>
               <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem1}
                  resizeMode="stretch"
                  style={{height: resp(150), width: resp(350), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
              A oxidação enérgica de um alceno produz ácidos carboxílicos.
              {`\n\n`}<Text style={{fontWeight: 'bold'}}>Exemplo 2:</Text> oxidação de álcool primário.
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem2}
                  resizeMode="stretch"
                  style={{height: resp(150), width: resp(350), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
              A oxidação enérgica de um álcool primário produz ácido carboxílico e água.
              {`\n\n`}<Text style={{fontWeight: 'bold'}}>Exemplo 3:</Text> oxidação de álcool secundário.
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem3}
                  resizeMode="stretch"
                  style={{height: resp(150), width: resp(350), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto style={{marginBottom: resp(40)}}>
              A oxidação de um álcool secundário produz cetona e água.
              </Texto>
              </Conteudo_Container>
          </Adicao_Container>
        </Global_Container>
      </Global_Scroll>
    </>
  );
};

export default Oxidacao;
