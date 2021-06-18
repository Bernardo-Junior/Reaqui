import styled from 'styled-components/native';
import { Global_Primary, Global_Secundary, Global_Tertiary } from '../../../utils/global';

import resp from '../../../utils/responsivity';



export const Header_Container = styled.SafeAreaView`
  width: 100%;
  height: ${resp(80)}px;
  align-items: flex-start;
  flex-direction: row;
  background-color: ${Global_Primary};
  justify-content: center;
  align-items: center;
`;

export const Header_Label = styled.Text`
  font-size: ${resp(28)}px;
  color: ${Global_Secundary}
`;

export const Icon = styled.Image`
  align-self: center;
  width: ${resp(120)}px;
  height: ${resp(120)}px;
  border-radius: ${resp(20)}px;
  margin-top: ${resp(30)}px;
`;

export const Text_Sobre = styled.Text`
  line-height: ${resp(25)}px;
  color: ${Global_Secundary};
  font-size: ${resp(18)}px;
  width: 80%;
  align-self: center;
  margin-top: ${resp(30)}px;
  text-align: justify;
`;

export const Button_Politica = styled.TouchableOpacity`
  margin-top: ${resp(50)}px;
  width: ${resp(300)}px;
  height: ${resp(60)}px;
  background-color: #00D8DE;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: ${resp(100)}px;
  flex-direction: row;
  margin-bottom: ${resp(20)}px;
`;

export const Button_Text = styled.Text`
  font-size: ${resp(18)}px;
  color: #FFFFFF;
  font-weight: bold;
  margin-left: ${resp(5)}px;
`;