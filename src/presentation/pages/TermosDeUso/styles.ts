import { Global_Secundary } from './../../../utils/global';
import styled from 'styled-components/native';

import resp from '../../../utils/responsivity';

export const Titulo_Text = styled.Text`
  font-weight: bold;
  font-size: ${resp(22)}px;
  align-self: center;
  width: 85%;
  text-align: center;
  margin-top: ${resp(10)}px;
  color: ${Global_Secundary}
`;

export const Conteudo_Text = styled.Text`
  width: 85%;
  margin-top: ${resp(20)}px;
  color: ${Global_Secundary};
  font-size: ${resp(14)}px;
  text-align: justify;
  align-self: center;
`;

export const Icon_Container = styled.TouchableOpacity`
  width: 85%;
  align-self: center;
  align-items: flex-start;
  justify-content: center;
  margin-top: ${resp(10)}px;
`;