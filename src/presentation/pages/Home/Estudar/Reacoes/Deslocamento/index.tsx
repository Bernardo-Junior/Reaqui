import React from 'react';
import { Platform, Text, View } from 'react-native';
import StatusBar from '../../../../../components/StatusBar';
import { Global_Container, Global_Primary, Global_Scroll } from '../../../../../../utils/global';
import HeaderReacoes from '../../../../../components/Header_Reacoes';
import { Conteudo_Container } from '../../styles';
import { Adicao_Container } from '../Adicao/styles';
import { Formula_Text, Imagem, Imagem_Container, Imagem_Legenda, Texto } from '../Decomposicao/styles';

import imagem1 from '../../../../../../assets/Imagens/Deslocamento/Exemplo1.png';
import imagem2 from '../../../../../../assets/Imagens/Deslocamento/Exemplo2.png';
import imagem3 from '../../../../../../assets/Imagens/Deslocamento/Exemplo3.png';

// import { Container } from './styles';
import resp from '../../../../../../utils/responsivity';

const Deslocamento: React.FC = () => {
  return (
    <>
      {
        Platform.OS === "ios" && <StatusBar />
      }
      <Global_Scroll>
        <HeaderReacoes title="Reações de Simples Troca ou Deslocamento" />
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
              Uma reação de simples troca ocorre quando reagem uma substância simples (formada por um único tipo de elemento químico) e uma substância composta (formada por mais de um tipo de elemento), originando uma nova substância simples e outra composta.
              {`\n\n`}Dizemos que a substancia simples “desloca” da substância composta uma nova substância simples. Por isso, ela também é chamada de <Text style={{fontWeight: 'bold'}}>reação de deslocamento.</Text>
              {`\n\n`}Outro nome comumente dado para essas reações é de <Text style={{fontWeight: 'bold'}}>substituição</Text>, pois um tipo de elemento é substituído por outro na substância composta.
              {`\n\n`}Genericamente, temos:
              </Texto>
              <Formula_Text>
              A + BC → AB + C   ou   A + BC → AC + B
              </Formula_Text>

              <Texto>
              Um exemplo desse tipo de reação inorgânica ocorre quando o ferro reage com alguma solução ácida, como uma solução aquosa de ácido clorídrico:
              </Texto>
              <Formula_Text>
              2 Fe(s) + 6 HCl(aq) → 2 FeCl3(aq) + 3 H2(g)
              </Formula_Text>
              <Texto>
              Observe que nessa reação o ferro é a substância simples e o ácido clorídrico é a substância composta. O ferro perde três elétrons que são recebidos pelos íons hidrogênio do ácido, formando então uma nova substância simples (o gás hidrogênio – H2) e uma nova substância composta (o cloreto de ferro III- FeCl3).
              {`\n\n`}Visto que nas reações de simples troca há também transferência de elétrons entre as substâncias, elas também correspondem a reações de oxirredução.
              {`\n\n`}No entanto, a reação acima só ocorreu porque o ferro é mais reativo que o hidrogênio. Dessa forma, o metal (ou ametal) mais reativo precisa ser o que está na substância simples, que poderá então deslocar o outro metal (ou ametal) menos reativo que está na substância composta. Para verificarmos se a reação de simples troca realmente ocorrerá, temos que analisar a fila de reatividade dos metais e dos ametais, que são dadas abaixo:
              </Texto>
              <Imagem_Container style={{marginTop: 0}}>
                <Imagem 
                  source={imagem1}
                  resizeMode="stretch"
                  style={{height: resp(130), width: resp(320), marginTop: 0}}
                />
              </Imagem_Container>

              <Texto>
              Por exemplo, será que as reações abaixo ocorrem?
              {`\n\t`}•	Zn + HCl → ?
              {`\n\t`}•	P + HCl → ?
              {`\n\t`}•	Cl2 + KI → ?
              {`\n\t`}•	I2 + KCl → ?
              </Texto>
              <Texto>
                Temos que:
                {`\n`}Zn + HCl → ZnCl2 + H2
              </Texto>
              <Texto style={{marginTop: resp(10)}}>
              Pela fila de reatividade dos metais, vemos que o zinco é mais reativo que o hidrogênio, por isso a reação acima ocorrerá. Se colocarmos uma lâmina de zinco numa solução de ácido clorídrico, veremos a formação de uma grande efervescência, que indica a liberação de gás hidrogênio.
              </Texto>
              <Imagem_Container style={{marginTop: 0}}>
                <Imagem 
                  source={imagem2}
                  resizeMode="stretch"
                  style={{height: resp(300), width: resp(200), marginTop: 0}}
                />
              </Imagem_Container>
              <Texto>
              Cu + HCl → Não ocorre.
              O cobre é menos reativo que o hidrogênio, por isso, se colocarmos uma lâmina de cobre numa solução de ácido clorídrico, não acontecerá nada.
              {`\n\n`}Cl2 + 2 KI → 2 KCl + I2
              {`\n\n`}Essa reação ocorre, porque pela fila de reatividade dos ametais, notamos que o cloro é mais reativo que o iodo.

              {`\n\n`}I2 + KCl → Não ocorre.
              {`\n\n`}O iodo é menos reativo que o cloro, por isso, essa reação não acontece.
              </Texto>
              <Imagem_Container style={{marginTop: 0, marginBottom: 0}}>
                <Imagem 
                  source={imagem3}
                  resizeMode="stretch"
                  style={{height: resp(250), width: resp(380), marginTop: 0}}
                />
              </Imagem_Container>
              <Imagem_Legenda style={{marginBottom: resp(50)}}>
              Bolhas de gás hidrogênio sendo liberadas numa reação de simples troca
              </Imagem_Legenda>
            </Conteudo_Container>
          </Adicao_Container>
        </Global_Container>
      </Global_Scroll>
    </>
  )
}

export default Deslocamento;