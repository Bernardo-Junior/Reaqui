import React from 'react';
import { Platform, Text, View } from 'react-native';
import StatusBar from '../../../../../components/StatusBar';
import { Global_Container, Global_Primary, Global_Scroll } from '../../../../../../utils/global';
import HeaderReacoes from '../../../../../components/Header_Reacoes';
import { Conteudo_Container } from '../../styles';
import { Adicao_Container } from '../Adicao/styles';
import { Formula_Text, Imagem, Imagem_Container, Imagem_Legenda, Texto } from '../Decomposicao/styles';

import imagem1 from '../../../../../../assets/Imagens/Substituicao/imagem1.png';
import imagem2 from '../../../../../../assets/Imagens/Substituicao/imagem2.png';
import imagem3 from '../../../../../../assets/Imagens/Substituicao/imagem3.png';
import imagem4 from '../../../../../../assets/Imagens/Substituicao/imagem4.png';
import imagem5 from '../../../../../../assets/Imagens/Substituicao/imagem5.png';
import imagem6 from '../../../../../../assets/Imagens/Substituicao/imagem6.png';
import imagem7 from '../../../../../../assets/Imagens/Substituicao/imagem7.png';
import imagem8 from '../../../../../../assets/Imagens/Substituicao/imagem8.png';

// import { Container } from './styles';
import resp from '../../../../../../utils/responsivity';

// import { Container } from './styles';

const Substituicao: React.FC = () => {
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
              Troca-se um átomo ou grupo de átomos de um composto orgânico por outro átomo ou grupo de átomos.
              {`\n\n`}Elas ocorrem especialmente com alcanos, hidrocarbonetos aromáticos (benzeno e seus derivados) e com haletos orgânicos.
              {`\n\n`}Genericamente, temos:
              </Texto>
              <Imagem_Container style={{marginTop: 0, marginBottom: 0}}>
                <Imagem 
                  source={imagem4}
                  resizeMode="stretch"
                  style={{height: resp(100), width: resp(300), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
              As principais reações de substituição são <Text style={{fontWeight: 'bold'}}>halogenação</Text> (pelo menos um átomo de hidrogênio do composto orgânico é substituído por um halogênio), <Text style={{fontWeight: 'bold'}}>nitração</Text> (ocorre com o ácido nítrico, em que pelo menos um hidrogênio é substituído pelo grupo — NO2), <Text style={{fontWeight: 'bold'}}>sulfonação</Text> (ocorre com o ácido sulfúrico, em que pelo menos um hidrogênio é substituído pelo grupo — SO3H), <Text style={{fontWeight: 'bold'}}>alquilação</Text> (ocorre com os aromáticos e com os haletos orgânicos, em que pelo menos um de seus hidrogênios é substituído por um radical alquila), <Text style={{fontWeight: 'bold'}}>acilação</Text> (um hidrogênio do anel aromático é substituído por um grupo acila) e hidrólise alcalina (ocorre com os haletos orgânicos quando sofrem quebra na presença de uma solução aquosa de base forte e álcoois são formados como produtos).
              {`\n\n`}Veja os principais exemplos de reações de substituição:
              {`\n\n`}<Text style={{fontWeight: 'bold'}}>• Halogenação:</Text> É assim chamada porque ocorre com as substâncias simples dos halogênios: F2, Cl2, Br2 e I2. No entanto, as mais comuns são a cloração (Cl2) e a bromação (Br2).
              {`\n\n`}Exemplo: Monocloração do etano: O hidrogênio é substituído pelo cloro.
              </Texto>
              <Imagem_Container style={{marginTop: 0, marginBottom: 0}}>
                <Imagem 
                  source={imagem5}
                  resizeMode="stretch"
                  style={{height: resp(100), width: resp(300), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
              <Text style={{fontWeight: 'bold'}}>• Nitração: </Text> Ocorre com o ácido nítrico.
              {`\n`}Exemplo: Nitração do metano:
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem7}
                  resizeMode="stretch"
                  style={{height: resp(110), width: resp(320), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
              <Text style={{fontWeight: 'bold'}}>• Sulfonação: </Text> Ocorre com o ácido sulfúrico.
              {`\n`}Exemplo: Sulfonação do benzeno:
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem8}
                  resizeMode="stretch"
                  style={{height: resp(80), width: resp(300), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
                <Text style={{fontWeight: 'bold'}}>• Alquilação:</Text> É conhecida por Alquilação de Friedel-Crafts porque foi concluída pela primeira vez por esses dois cientistas em 1877. Esse tipo de reação ocorre com os aromáticos e com os haletos orgânicos, em que pelo menos um de seus hidrogênios é substituído por um radical alquila.
                {`\n\n`}Pode ser usado o cloreto de alumínio anidro como catalisador ou outros catalisadores, como o FeCl3.
                {`\n\n`}Exemplo: Metilação do benzeno:
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem3}
                  resizeMode="stretch"
                  style={{height: resp(110), width: resp(320), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
                <Text style={{fontWeight: 'bold'}}>• Acilação:</Text> Essa reação ocorre quando um hidrogênio do anel aromático é substituído por um grupo acila, mostrado abaixo:
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem1}
                  resizeMode="stretch"
                  style={{height: resp(100), width: resp(120), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
              Exemplo: Acilação do benzeno:
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem2}
                  resizeMode="stretch"
                  style={{height: resp(110), width: resp(320), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
                <Text style={{fontWeight: 'bold'}}>• Hidrólise alcalina: </Text> Essa reação ocorre com os haletos orgânicos quando sofrem quebra na presença de uma solução aquosa de base forte e álcoois são formados como produtos.
                {`\n\n`}Exemplo: hidrólise alcalina do cloreto de etila (cloroetano) em que é formado o etanol:
              </Texto>
              <Imagem_Container style={{marginTop: resp(20), marginBottom: 0}}>
                <Imagem 
                  source={imagem6}
                  resizeMode="stretch"
                  style={{height: resp(110), width: resp(350), marginTop: 0}}
                />
              </Imagem_Container>
            </Conteudo_Container>
          </Adicao_Container>
        </Global_Container>
      </Global_Scroll>
    </>
  )
}

export default Substituicao;