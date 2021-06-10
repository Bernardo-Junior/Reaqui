import React from 'react';
import { Platform, Text, View } from 'react-native';
import StatusBar from '../../../../../components/StatusBar';
import { Global_Container, Global_Primary, Global_Scroll } from '../../../../../../utils/global';
import HeaderReacoes from '../../../../../components/Header_Reacoes';
import { Conteudo_Container } from '../../styles';
import { Adicao_Container } from '../Adicao/styles';
import { Formula_Text, Imagem, Imagem_Container, Imagem_Legenda, Texto } from '../Decomposicao/styles';

import imagem1 from '../../../../../../assets/Imagens/DuplaTroca/bicarbonato.png';

// import { Container } from './styles';
import resp from '../../../../../../utils/responsivity';

// import { Container } from './styles';

const TrocaDupla: React.FC = () => {
  return (
    <>
      {
        Platform.OS === "ios" && <StatusBar />
      }
      <Global_Scroll>
        <HeaderReacoes title="Reações de Dupla Troca" />
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
              Equação que representa uma Reação de dupla troca:
              </Texto>
              <Formula_Text>
              AB + CD → AD + BC
              </Formula_Text>
              <Texto>
              Ela é proveniente da reação de dois reagentes e forma dois produtos, ou seja, se duas substâncias compostas reagirem dando origem a novas substâncias compostas recebem essa denominação.
              {`\n\n`}As Reações de dupla troca só ocorrem quando obedecem às seguintes condições: um dos produtos (AD ou BC), quando comparado aos reagentes, deve se apresentar como alguma das formas abaixo:
              {`\n\n`}1. Mais volátil (produz um gás);
              {`\n`}2. Menos ionizado ou dissociado, tornando-se mais fraco;
              {`\n`}3. Insolúvel (esta característica permite a formação de um precipitado ao final do processo).
              {`\n\n`}Para um melhor entendimento, acompanhe exemplos de cada um dos 3 itens apresentados:
              {`\n\n`}<Text style={{fontWeight: 'bold'}}>1. Produto mais volátil:</Text> a reação mais comum que produz um produto mais volátil é a que ocorre entre um sal - bicarbonato (HCO-3) – e um ácido. Veja a equação do processo:
              </Texto>
              <Formula_Text>
              H+ (aq) + HCO-3 (aq) → CO2(g) + H2O(l)
              </Formula_Text>
              <Texto>
              Um dos produtos intermediários formados durante a reação acima é o ácido carbônico (H2CO3), que é instável e se decompõe produzindo um gás (CO2).
              {`\n\n`}Você sabia que essa reação pode ocorrer em nosso organismo? Quando usamos bicarbonato de sódio (NaHCO3) para diminuir a acidez estomacal, induzimos o contato do sal NaHCO3 com o ácido clorídrico presente no estômago.
              {`\n\n`}<Text style={{fontWeight: 'bold'}}>2. Produto menos ionizado:</Text> um exemplo de reação que dá origem a este produto é a Neutralização, observe:
              </Texto>
              <Formula_Text>
              HCl(aq) + NaOH(aq) → NaCl(aq) + H2O(l)
              </Formula_Text>
              <Texto>
              Essa reação ocorre entre um ácido (HCl) e uma base (NaOH), é considerada dupla troca porque o produto H2O é menos ionizado que os reagentes (HCl e NaOH).
              {`\n\n`}<Text style={{fontWeight: 'bold'}}>3. Produto Insolúvel:</Text> a reação entre o ácido sulfúrico com hidróxido de bário produz água e sulfato de bário.
              </Texto>
              <Formula_Text>
              H2SO4 (aq) + Ba(OH)2 (aq) → 2 H2O(l) + BaSO4(s)
              </Formula_Text>
              <Texto>
              O produto sulfato de bário (BaSO4) é um sal branco insolúvel. Essa reação é facilmente visualizada, o sal formado constitui um precipitado sólido que se deposita no fundo do recipiente.
              </Texto>
              <Imagem_Container  style={{marginBottom: 0}}>
                <Imagem 
                  source={imagem1}
                  resizeMode="stretch"
                  style={{height: resp(250), width: resp(380), marginTop: 0}}
                />
              </Imagem_Container>
              <Imagem_Legenda style={{marginBottom: resp(40)}}>
              Bicarbonato de sódio: presente em reações de dupla troca.
              </Imagem_Legenda>
            </Conteudo_Container>
          </Adicao_Container>
        </Global_Container>
      </Global_Scroll>
    </>
  )
}

export default TrocaDupla;