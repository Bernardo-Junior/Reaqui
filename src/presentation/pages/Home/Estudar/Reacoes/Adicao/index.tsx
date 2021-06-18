import React from 'react';
import { Platform } from 'react-native';
import { Global_Container, Global_Primary, Global_Scroll } from '../../../../../../utils/global';
import HeaderReacoes from '../../../../../components/Header_Reacoes';
import StatusBar from '../../../../../components/StatusBar';
import { Conteudo_Container } from '../../styles';
import { 
  Adicao_Container, 
  Formula_Text, 
  Texto, 
  Titulo_Left,
  Imagem,
  Imagem_Container,
  Imagem_Legenda
} from './styles';

import resp from '../../../../../../utils/responsivity';

import imagem1 from '../../../../../../assets/Imagens/Adicao/adicao1.png';

import imagem2 from '../../../../../../assets/Imagens/Adicao/adicao2.png';

const Adicao: React.FC = () => {
  return (
    <>
      {
        Platform.OS === 'ios' && <StatusBar />
      }
      <Global_Scroll>
        <HeaderReacoes title="Reações de Síntese ou Adição" />
        <Global_Container style={{backgroundColor: Global_Primary}}>
          <Adicao_Container>
            <Conteudo_Container 
              style={{ 
                flex: 1, 
                alignSelf: 'center', 
                backgroundColor: '#FFFFFF',
                justifyContent: 'flex-start'
              }}
            >
              <Texto>
                Reação de Síntese ou de Adição é quando dois ou mais reagentes participam de uma reação originando um único produto mais complexo.
              </Texto>
              <Formula_Text>
              A + B  → C
              </Formula_Text>

              <Titulo_Left>
                Exemplos: 
              </Titulo_Left>

              <Texto style={{marginTop: resp(15)}}>
              1) Reagem o carbono e o gás oxigênio para a formação do dióxido de carbono (gás carbônico):
              </Texto>

              <Formula_Text>
              C + O2  → CO2
              </Formula_Text>

              <Texto>
              2) Ao se queimar a fita de magnésio, o oxigênio presente no ar reage com o magnésio da fita, originando o óxido de magnésio:
              </Texto>

              <Formula_Text>
              2  Mg  + O2  →  2  MgO
              </Formula_Text>
              <Imagem_Container>
                <Imagem 
                  source={imagem1}
                  resizeMode="stretch"
                />
                <Imagem_Legenda>
                Reação de síntese entre o oxigênio e o magnésio produzindo o óxido de magnésio
                </Imagem_Legenda>
              </Imagem_Container> 

              <Texto>
              3) Reação do óxido de cálcio com a água, produz o hidróxido de cálcio:
              </Texto>

              <Formula_Text>
              CaO  +  H2O  →  Ca(OH)2
              </Formula_Text>

              <Texto>
              4) As soluções aquosas de ácido clorídrico e hidróxido de amônio, liberam dois gases: o HCl e o NH3. Se colocarmos estes dois gases em contato, eles gerarão uma névoa que é o cloreto de amônio:
              </Texto>

              <Imagem_Container>
                <Imagem 
                  source={imagem2}
                  resizeMode="stretch"
                />
                <Imagem_Legenda>
                Reação de síntese entre os gases HCl e NH3 produz cloreto de amônio
                </Imagem_Legenda>
              </Imagem_Container> 

              <Formula_Text style={{marginTop: resp(0), marginBottom: resp(50)}}>
              HCl + NH3  → NH4Cl
              </Formula_Text>
            </Conteudo_Container>
          </Adicao_Container>
        </Global_Container>
      </Global_Scroll>
    </>
  )
}

export default Adicao;