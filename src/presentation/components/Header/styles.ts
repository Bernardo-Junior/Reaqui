import styled from 'styled-components/native';
import { Global_Primary, Global_Secundary } from '../../../utils/global';

import resp from '../../../utils/responsivity';

export const Header_Container = styled.SafeAreaView`
  width: 100%;
  height: ${resp(80)}px;
  align-items: flex-start;
  flex-direction: row;
  background-color: ${Global_Primary};
`;

export const Icon_Container = styled.TouchableOpacity`
  width: ${resp(80)}px;
  height: ${resp(80)}px;
  align-items: center;
  justify-content: center;
`;

export const Title_Container = styled.View`
  width: ${resp(300)}px;
  height: ${resp(80)}px;
  justify-content: center;
  align-items: flex-start;
`;

export const Title_Text = styled.Text`
  color: #000000;
  font-weight: 500;
  font-size: ${resp(20)}px;
`;