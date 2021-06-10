import styled from 'styled-components/native';
import { Global_Primary, Global_Secundary } from '../../../utils/global';

import resp from '../../../utils/responsivity';

export const Header_Container = styled.SafeAreaView`
  width: 100%;
  height: ${resp(120)}px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-color: ${Global_Primary};
`;

export const Icon_Container = styled.TouchableOpacity`
  width: ${resp(30)}px;
  margin-left: ${resp(30)}px;
  margin-right: ${resp(10)}px;
  height: ${resp(80)}px;
  align-items: center;
  justify-content: center;
`;

export const Title_Container = styled.View`
  width: ${resp(240)}px;
  height: ${resp(80)}px;
  justify-content: center;
  align-items: flex-start;
`;


export const Title_Text = styled.Text`
  color: ${Global_Secundary};
  font-weight: 400;
  font-size: ${resp(25)}px;
`;