import { Global_Primary, Global_Secundary, Global_Tertiary } from './../../../../utils/global';
import styled from 'styled-components/native';

import resp from '../../../../utils/responsivity';

export const Header_Container = styled.View`
  width: 100%;
  height: ${resp(200)}px;
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
  width: 85%;
  height: auto;
  border-bottom-left-radius: ${resp(20)}px;
  border-bottom-right-radius: ${resp(20)}px;
  background-color: #FFFFFF;
  align-self: center;
  margin-bottom: 20px;
`;

export const Questao_Header = styled.View`
  background-color: #BFCACD;
  border-top-left-radius: ${resp(20)}px;
  border-top-right-radius: ${resp(20)}px;
  z-index: 50;
  bottom: ${resp(50)}px;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: flex-start;
`;

export const Questao_Body = styled.View`
  flex: 1;
  height: 200px;
  bottom: ${resp(50)}px;
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
