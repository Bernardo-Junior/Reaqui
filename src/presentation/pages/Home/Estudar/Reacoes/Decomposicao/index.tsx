import React from 'react';
import { Platform, Text } from 'react-native';
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

import imagem1 from '../../../../../../assets/Imagens/Decomposicao/Exemplo1.png';
import imagem2 from '../../../../../../assets/Imagens/Decomposicao/Exemplo2.png';
import imagem3 from '../../../../../../assets/Imagens/Decomposicao/Exemplo3.1.png';
import imagem4 from '../../../../../../assets/Imagens/Decomposicao/Exemplo4.png';
import imagem5 from '../../../../../../assets/Imagens/Decomposicao/Exemplo5.png';
import imagem6 from '../../../../../../assets/Imagens/Decomposicao/Exemplo3.2.png';
import imagem7 from '../../../../../../assets/Imagens/Decomposicao/Exemplo3.3.png';

import resp from '../../../../../../utils/responsivity';

export const Decomposicao: React.FC = () => {
  return (
    <>
      {
        Platform.OS === 'ios' && <StatusBar />
      }
      <Global_Scroll>
        <HeaderReacoes title="Reações de Análise ou Decomposição" />
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
              As reações de análise também chamadas de reações de decomposição são aquelas em que um reagente composto (formado por mais de um tipo de elemento) é dividido em duas ou mais substâncias de estruturas simples (formadas por um único tipo de elemento).
              </Texto>
              <Formula_Text style={{alignSelf: 'flex-start'}}>
                De modo genérico, temos:  AB → A + B
              </Formula_Text>

              <Titulo_Left>Exemplo:</Titulo_Left>

              <Texto style={{marginTop: resp(15)}}>
              {}Essa é a reação que faz os airbags dos carros funcionarem e salvarem vidas. Dentro deles há a azida de sódio (NaN3), e quando há uma batida, um dispositivo dos airbags é acionado e a temperatura faz com que a azida se decomponha no gás nitrogênio e no sódio metálico.
              {`\n\n`}O gás nitrogênio é um gás inerte que faz a bolsa (bag) inflar. O sódio pode ser reativo, por isso, outro composto é colocado dentro da bolsa, o nitrato de potássio, que reage com o sódio e gera mais gás nitrogênio. Essa segunda reação, no entanto, não é de decomposição ou análise.
              {`\n\n`}Vários fatores podem causar a decomposição de um composto, entre eles, vamos destacar três:
              </Texto>
              <Texto>
              1.	<Text style={{fontWeight: 'bold'}}>{`Calor:`}</Text> Quando algumas substâncias compostas são submetidas ao aquecimento, elas se decompõem. Esse tipo de reação é chamado de <Text style={{fontWeight: 'bold'}}>{`pirólise`}</Text>, que do grego piro significa “fogo” e lise significa “quebra”, isto é, quebra de um composto por meio do fogo.
              {`\n\n`}Quando essa reação é feita na indústria, é também chamada de calcinação.
              {`\n\n`}Um exemplo muito importante do uso da pirólise é na produção do bio-óleo ou alcatrão pirolítico, que é considerado uma alternativa energética para os combustíveis derivados do petróleo. A vantagem do bio-óleo é que ele não possui metais pesados como chumbo e mercúrio, que podem poluir o meio ambiente e contaminar seres vivos; não possui enxofre, que sofre reações na atmosfera e gera as chuvas ácidas, e também libera menos cinzas.
              {`\n\n`}Outros exemplos de reações de decomposição pela ação do calor:
              </Texto>
              <Imagem_Container style={{marginTop: resp(0), alignSelf: 'flex-start'}}>
                <Imagem 
                  style={{borderRadius: 0, width: resp(200), height: resp(150)}}
                  source={imagem1}
                  resizeMode="stretch"
                />
              </Imagem_Container>

              <Texto>
              2.	<Text style={{fontWeight: 'bold'}}>{`Luz:`}</Text> A luz pode causar a decomposição dos compostos. Esse tipo de reação é chamado de <Text style={{fontWeight: 'bold'}}>{`fotólise`}</Text>.
              {`\n\n`}Um exemplo é a água oxigenada que deve ser guardada em frascos escuros ou opacos, como o mostrado abaixo, para impedir a passagem de luz e a sua decomposição, produzindo água e gás oxigênio:
              </Texto>
              <Imagem_Container style={{marginTop: 0}}>
                <Imagem 
                  source={imagem2}
                  resizeMode="stretch"
                  style={{
                    width: resp(150),
                    height: resp(260),
                    borderRadius: 0
                  }}
                />
              </Imagem_Container>

              <Texto>
              3.	<Text style={{fontWeight: 'bold'}}>{`Luz:`}</Text> Ao passar uma corrente elétrica sobre um líquido ou um composto fundido, ele é decomposto em substâncias simples. Esse processo é chamado de <Text style={{fontWeight: 'bold'}}>{`eletrólise`}</Text> , que pode ser <Text style={{fontWeight: 'bold'}}>{`aquosa`}</Text> ou <Text style={{fontWeight: 'bold'}}>{`ígnea`}</Text>.
              {`\n\n`}Um exemplo muito importante é a eletrólise ígnea do sal fundido (em que os seus íons Na+ e Cl- ficam livres). Ao passar a corrente elétrica por ele, originam-se duas substâncias simples importantes: o sódio metálico e o gás cloro.
              </Texto>

              <Imagem_Container style={{marginTop: resp(0), marginBottom: resp(0)}}>
                <Imagem 
                  source={imagem4}
                  resizeMode="cover"
                  style={{
                    width: resp(220),
                    height: resp(40),
                    borderRadius: 0
                  }}
                />
              </Imagem_Container>

              <Texto>
              Abaixo temos um esquema dessa eletrólise:
              </Texto>

              <Imagem_Container style={{marginTop: resp(0),}}>
                <Imagem 
                  source={imagem3}
                  resizeMode="stretch"
                  style={{
                    width: resp(300),
                    height: resp(400),
                    borderRadius: 0
                  }}
                />
              </Imagem_Container>

              <Texto>
              Outro exemplo é a eletrólise da água, que produz gás hidrogênio e gás oxigênio:
              </Texto>

              <Imagem_Container style={{marginTop: resp(0), marginBottom: resp(20)}}>
                <Imagem 
                  source={imagem5}
                  resizeMode="cover"
                  style={{
                    width: resp(220),
                    height: resp(40),
                    borderRadius: 0
                  }}
                />
              </Imagem_Container>

              <Imagem_Container style={{marginTop: resp(0),}}>
                <Imagem 
                  source={imagem6}
                  resizeMode="stretch"
                  style={{
                    width: resp(300),
                    height: resp(400),

                  }}
                />
              </Imagem_Container>

              <Imagem_Container style={{marginTop: resp(0),}}>
                <Imagem 
                  source={imagem7}
                  resizeMode="stretch"
                  style={{
                    width: resp(380),
                    height: resp(250),

                  }}
                />
                <Imagem_Legenda>
                A reação que faz os airbags inflarem, protegendo o motorista de um impacto muito danoso, é uma reação de análise ou decomposição
                </Imagem_Legenda>
              </Imagem_Container>

            </Conteudo_Container>
          </Adicao_Container>
        </Global_Container>
      </Global_Scroll>
    </>
  )
}

export default Decomposicao;