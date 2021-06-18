import React from 'react';
import { Platform, View, Text, BackHandler, Alert } from 'react-native';
import { Global_Scroll, Global_Container, Global_styles } from '../../../../utils/global';
import StatusBar from '../../../components/StatusBar';

import iconLivro from '../../../../assets/icons/livro.png';

import { Data } from '../../../../utils/perguntasArray';

import resp from '../../../../utils/responsivity';

import {
  Header_Container,
  Header_Text,
  Header_Icon,
  Questao_Container,
  Questao_Header,
  Questao_Body,
  Pergunta_Texto,
  Titulo_Questao,
  Questao_Header_Container,
  Radio_Button,
  Questao_Body_Container,
  Radio_Selected,
  Radio_Container,
  Radio_Label,
  Footer_Container,
  Footer_Container_Opcoes_Button_Next,
  Footer_Container_Opcoes_Pontuacao_Text,
  Footer_Container_Opcoes_Top,
  Footer_Container_Opcoes_Button_Label,
  Button_Sair
} from './styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Quiz: React.FC = () => {
  const [quantidadeQuestoes, setQuantidadeQuestoes] = useState<number>(0);
  const { goBack, } = useNavigation();
  const [control, setControl] = useState<number>(0);
  const [pontuacao, setPontuacao] = useState<number>(0);
  const [questoesCorretas, setQuestoesCorretas] = useState<number>(0);

  // useEffect(() => {
  //   const gestureEndListener = () => {
  //     limparTudo();
  //   };
  
  //   // You can also use the 'gestureStart' or 'gestureCancel' events
  //   navigation.addListener('gestureEnd', gestureEndListener);
  
  //   return () => {
  //     navigation.removeListener('gestureEnd', gestureEndListener);
  //   };
  // }, [])

  useEffect(() => {
    const backAction = () => {
      
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const limparOpcoes = () => {
    Data[quantidadeQuestoes].opcoes.forEach(op => {
      if(op.isSelecionado === true) {
        op.isSelecionado = false;
      }
    })
  }

  const limparTudo = () => {
    console.log(quantidadeQuestoes)
    for(var i = 0; i < quantidadeQuestoes; i++) {
      Data[i].opcoes.forEach(op => {
        if(op.isSelecionado === true) {
          op.isSelecionado = false;
          
        }
      })
      
    }
    setPontuacao(0);
    setQuestoesCorretas(0);
    setQuantidadeQuestoes(0);
    setControl(control+1);
    goBack();
  }

  const reset = () => {
    console.log(quantidadeQuestoes)
    for(var i = 0; i < quantidadeQuestoes; i++) {
      Data[i].opcoes.forEach(op => {
        if(op.isSelecionado === true) {
          op.isSelecionado = false;
          
        }
      }) 
    }
    setPontuacao(0);
    setQuestoesCorretas(0);
    setQuantidadeQuestoes(0);
  }
  const pintarRadio = (id: number, index: number) => {
    const buscarIndex = Data[quantidadeQuestoes].opcoes.findIndex(op => op.id === id);
   
    if(buscarIndex >= 0) {
      limparOpcoes();
      Data[quantidadeQuestoes].opcoes[buscarIndex].isSelecionado = true;
      setControl(control+1);
    }
  }

  const verificarOpcao = () => {
    const indexSelecionado = Data[quantidadeQuestoes].opcoes.findIndex(op => op.isSelecionado === true);
    if(indexSelecionado >= 0) {
      console.log(indexSelecionado, Data[quantidadeQuestoes].respota)
      if(indexSelecionado === Data[quantidadeQuestoes].respota) {
        if(quantidadeQuestoes <= 9) {
          setPontuacao(pontuacao+10);
          setQuestoesCorretas(questoesCorretas+1);
          setQuantidadeQuestoes(quantidadeQuestoes+1);
        } else {
          setPontuacao(pontuacao+1);
          setQuestoesCorretas(questoesCorretas+1);
        }
      } else {
        if(quantidadeQuestoes <= 9) {
          setQuantidadeQuestoes(quantidadeQuestoes+1);
        } 
      }
    } else {
      
      console.log("CAMPO VAZIO")
    }
  }
  useEffect(() => {
   
  }, [control])

  const render_questoes = () => {
    return (
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

          <Questao_Container style={[Global_styles.shadow, { elevation: 2}]}>
            <Questao_Header >
              <Questao_Header_Container>
                <Titulo_Questao>
                  {Data[quantidadeQuestoes].titulo}
                </Titulo_Questao>
                <Pergunta_Texto>
                  {Data[quantidadeQuestoes].pergunta}
                </Pergunta_Texto>
              </Questao_Header_Container>
            </Questao_Header>
            <Questao_Body>
              <Questao_Body_Container>
                {
                  Data[quantidadeQuestoes].opcoes.map((item, index) => {
                    return (
                      <Radio_Container key={item.id}>
                        <Radio_Button onPress={() => { pintarRadio(item.id, index)} } >
                          {
                            item.isSelecionado && (
                              <Radio_Selected />
                            )
                          }
                        </Radio_Button>
                        <Radio_Label>
                          {item.texto}
                        </Radio_Label>
                      </Radio_Container>

                    )
                  })
                }

              </Questao_Body_Container>
            </Questao_Body>
          </Questao_Container>
          <Footer_Container>
            <Footer_Container_Opcoes_Top>
              <Footer_Container_Opcoes_Pontuacao_Text>
                Pontuação: <Text style={{fontWeight: 'bold', color: "#000000"}}>{pontuacao}</Text>
              </Footer_Container_Opcoes_Pontuacao_Text>
              <Footer_Container_Opcoes_Button_Next  
                style={[Global_styles.shadow, { elevation: 2}]}
                onPress={() => { verificarOpcao() }}
              >
                <Footer_Container_Opcoes_Button_Label>
                  Próximo
                </Footer_Container_Opcoes_Button_Label>
              </Footer_Container_Opcoes_Button_Next>
            </Footer_Container_Opcoes_Top>
            <Button_Sair 
              style={[Global_styles.shadow, { elevation: 2}]}
              onPress={() => { 
                Alert.alert("Sair!", "Você perderá todo o seu progresso se sair, deseja mesmo sair", [
                  {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel"
                  },
                  { text: "Sim", onPress: () => { limparTudo()} }
                ]);
              }}
            >
              <Footer_Container_Opcoes_Button_Label>
                Sair
              </Footer_Container_Opcoes_Button_Label>
            </Button_Sair>
          </Footer_Container>
          
        </Global_Container>
      </Global_Scroll>
    )
  }

  const render_placar = () => {
    return (
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

        <Questao_Container style={[Global_styles.shadow, { elevation: 2, backgroundColor: '#1DD1A1'}]}>
          <Questao_Header style={{ backgroundColor: '#1DD1A1'}}>
            <Questao_Header_Container>
              <Titulo_Questao style={{color: "#FFFFFF"}}>
                Parabéns!
              </Titulo_Questao>
              <Pergunta_Texto style={{color: "#FFFFFF", lineHeight: resp(25)}}>
               Você acertou um total de {questoesCorretas} questões, em um total de 10 questões.
               {`\n`}Continue praticando e fazendo o seu melhor.
              </Pergunta_Texto>
            </Questao_Header_Container>
          </Questao_Header>
          
        </Questao_Container>
        <Footer_Container>
          <Footer_Container_Opcoes_Top>
            <Footer_Container_Opcoes_Pontuacao_Text>
              Pontuação: <Text style={{fontWeight: 'bold', color: "#000000"}}>{pontuacao}</Text>
            </Footer_Container_Opcoes_Pontuacao_Text>
            <Footer_Container_Opcoes_Button_Next  
              style={[Global_styles.shadow, { elevation: 2, width: resp(130), }]}
              onPress={() => { reset() }}
            >
              <Footer_Container_Opcoes_Button_Label>
                Jogar de novo
              </Footer_Container_Opcoes_Button_Label>
            </Footer_Container_Opcoes_Button_Next>
          </Footer_Container_Opcoes_Top>
          <Button_Sair 
            style={[Global_styles.shadow, { elevation: 2}]}
            onPress={() => { 
              limparTudo()
            }}
          >
            <Footer_Container_Opcoes_Button_Label>
              Sair
            </Footer_Container_Opcoes_Button_Label>
          </Button_Sair>
        </Footer_Container>
        
      </Global_Container>
    </Global_Scroll>
    )
  }
  return (
    <>
      {
        Platform.OS === "ios" && (
          <StatusBar />
        )
      }
      {
        quantidadeQuestoes <= 9
        ? ( render_questoes() )
        : ( render_placar() )
      }
    </>
  )
}

export default Quiz;