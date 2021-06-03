import styled from 'styled-components/native';
import { Global_Primary, Global_Secundary, Global_Tertiary } from '../../../utils/global';

import resp from '../../../utils/responsivity';

export const Home_Container = styled.View`
  width: 85%;
  height: 100%;
  align-self: center;
`;

export const Logo_Container = styled.View`
  width: 100%;
  height: 15%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const Icone_Reaqui = styled.View`
  width: 30%;
  height: 60%;
  background-color: blue;
  margin-right: ${resp(15)}px;
`;

export const Title_Text = styled.Text`
  color: ${Global_Secundary};
  font-weight: 400;
  font-size: ${resp(30)}px;
`;

export const Label_Bordao = styled.Text`
  color: ${Global_Tertiary};
  font-weight: 300;
  width: 80%;
`;

export const Menu_Container = styled.TouchableOpacity`
  margin-top: ${resp(40)}px;
  width: 80%;
  height: 30%;
  align-self: center;
  border-radius: ${resp(20)}px;
  background-color: #DDEAEE;
  border: 0.2px;
  border-color: #FFFFFF;
`;