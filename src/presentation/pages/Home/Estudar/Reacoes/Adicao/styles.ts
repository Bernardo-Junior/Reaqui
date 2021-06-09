import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Global_Primary, Global_Secundary, Global_Tertiary } from '../../../../../../utils/global';

import resp from '../../../../../../utils/responsivity';

export const Adicao_Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  border-top-left-radius: ${resp(20)}px;
  border-top-right-radius: ${resp(20)}px;
`;

export const Texto = styled.Text`
  font-size: ${resp(14)}px;
  color: ${Global_Secundary};
  line-height: ${resp(20)}px;
  margin-top: ${resp(40)}px;
  width: 100%;
  text-align: justify;
`;

export const Formula_Text = styled.Text`
  align-self: center;
  text-transform: uppercase;
  margin-top: ${resp(15)}px;
  font-weight: 500;
  color: ${Global_Secundary};
`;

export const Titulo_Left = styled.Text`
  font-size: ${resp(14)}px;
  color: ${Global_Secundary};
  line-height: ${resp(20)}px;
  margin-top: ${resp(40)}px;
  align-self: flex-start;
  font-weight: bold;
`;

export const Imagem = styled.Image`
  align-self: center;
  width: ${resp(380)}px;
  height: ${resp(250)}px;
  margin-top: ${resp(30)}px;
  border-radius: ${Platform.OS === 'android' ? `${resp(3)}` : `${resp(6)}`}px;
`;

export const Imagem_Legenda = styled.Text`
  color: ${Global_Tertiary};
  text-align: center;
  font-size: ${resp(12)}px;
  width: ${resp(380)}px;
  align-self: center;
`;

export const Imagem_Container = styled.View`
  margin-top: ${resp(40)}px;
  margin-bottom: ${resp(20)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;
