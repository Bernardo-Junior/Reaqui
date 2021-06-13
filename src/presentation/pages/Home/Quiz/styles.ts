import { Global_Primary, Global_Secundary, Global_Tertiary } from './../../../../utils/global';
import styled from 'styled-components/native';

import resp from '../../../../utils/responsivity';

export const Header_Container = styled.View`
  width: 100%;
  height: ${resp(230)}px;
  background-color: ${Global_Primary};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
`;

export const Header_Text = styled.Text`
  color: ${Global_Secundary};
  font-size: ${resp(28)}px;
  margin-bottom: ${resp(50)}px;
  right: ${resp(20)}px;
`;

export const Header_Icon = styled.Image`
  width: ${resp(140)}px;
  height: ${resp(120)}px;
  margin-bottom: ${resp(50)}px;
  margin-left: ${resp(15)}px;
`;

export const Questao_Container = styled.View`
  flex: 1;
  width: 85%;
  height: auto;
  border-bottom-left-radius: ${resp(20)}px;
  border-bottom-right-radius: ${resp(20)}px;
  background-color: #FFFFFF;
  align-self: center;
  
  margin-bottom: ${resp(40)}px;
`;

export const Questao_Header = styled.View`
  background-color: #BFCACD;
  border-top-left-radius: ${resp(20)}px;
  border-top-right-radius: ${resp(20)}px;
  bottom: ${resp(70)}px;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: flex-start;
`;

export const Questao_Body = styled.View`
  flex: 1;
  bottom: ${resp(70)}px;
  background-color: #FFFFFF;
  border-bottom-left-radius: ${resp(20)}px;
  border-bottom-right-radius: ${resp(20)}px;
`;

export const Titulo_Questao = styled.Text`
  color: ${Global_Secundary};
  margin-top: ${resp(30)}px;
  font-size: ${resp(25)}px;
`;

export const Pergunta_Texto = styled.Text`
  color: ${Global_Secundary};
  margin-bottom: ${resp(30)}px;
  margin-top: ${resp(15)}px;
  font-size: ${resp(16)}px;
`;

export const Questao_Header_Container = styled.View`
  width: ${resp(280)}px;
  align-self: center;
`;
export const Questao_Body_Container = styled(Questao_Header_Container)`
  margin-top: ${resp(30)}px;
`;

export const Radio_Button = styled.TouchableOpacity`
  width: ${resp(30)}px;
  height: ${resp(30)}px;
  border-color: ${Global_Tertiary};
  border-width: 2px;
  border-radius: ${resp(100)}px;
  justify-content: center;
  align-items: center;
`;

export const Radio_Selected = styled.View`
  width: ${resp(18)}px;
  height: ${resp(18)}px;
  background-color: ${Global_Tertiary};
  border-radius: ${resp(100)}px;
`;

export const Radio_Container = styled.View`
  margin-top: ${resp(20)}px;
  margin-bottom: ${resp(20)}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Radio_Label = styled.Text`
  color: ${Global_Secundary};
  margin-left: ${resp(10)}px;
`;

export const Footer_Container = styled.View`
  width: 80%;
  align-self: center;
  justify-content: center;
  margin-bottom: ${resp(50)}px;
`;

export const Footer_Container_Opcoes_Top = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Footer_Container_Opcoes_Pontuacao_Text = styled.Text`
  color: ${Global_Tertiary};
  font-size: ${resp(18)}px;
`;

export const Footer_Container_Opcoes_Button_Next = styled.TouchableOpacity`
  width: ${resp(110)}px;
  height: ${resp(50)}px;
  border-radius: ${resp(10)}px;
  background-color: #BFCACD;
  justify-content: center;
  align-items: center;
  margin-bottom: ${resp(5)}px;
`;

export const Footer_Container_Opcoes_Button_Label = styled.Text`
  color: ${Global_Secundary};
  font-size: ${resp(16)}px;
`;

export const Button_Sair = styled.TouchableOpacity`
  background-color: #FAD390;
  width: ${resp(110)}px;
  height: ${resp(50)}px;
  margin-top: ${resp(50)}px;
  border-radius: ${resp(10)}px;
  justify-content: center;
  align-items: center;
`;
