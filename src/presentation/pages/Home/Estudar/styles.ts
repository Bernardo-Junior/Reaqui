import styled from 'styled-components/native';
import { Global_Button, Global_Primary, Global_Secundary } from '../../../../utils/global';

import resp from '../../../../utils/responsivity';

export const Conteudo_Container = styled.View`
  width: 80%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export const Title_Text = styled.Text`
  font-size: ${resp(22)}px;
  color: ${Global_Secundary};
  align-self: center;
  margin-top: ${resp(25)}px;
  font-weight: 400;
  text-align: justify;
`;

export const Hr = styled.View`
  width: 100%;
  height: ${resp(.8)}px;
  background-color: ${Global_Primary};
  margin-top: ${resp(15)}px;
  align-self: center;
`;

export const Descricao_Text = styled.Text`
  color: ${Global_Secundary};
  text-align: justify;
  font-size: ${resp(16)}px;
  width: 100%;
  margin-top: ${resp(10)}px;
  font-weight: 300;
`;

export const Title_Topico = styled.Text`
  font-size: ${resp(20)}px;
  font-weight: 400;
  text-align: justify;
  color: ${Global_Secundary};
  align-self: flex-start;
  margin-top: ${resp(20)}px;
`;

export const Button_Container = styled.TouchableOpacity`
  width: 100%;
  height: ${resp(120)}px;
  background-color: ${Global_Primary};
  border-radius: ${resp(20)}px;
  margin-top: ${resp(15)}px;
  flex-direction: row;
`;

export const Button_Left_Container = styled.View`
  border-radius: ${resp(20)}px;
  width: 87%;
  height: ${resp(120)}px;
  background-color: ${Global_Button};
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
`;

export const Button_Right_Container = styled.View`
  height: ${resp(120)}px;
  flex: 1;
  border-top-right-radius: ${resp(20)}px;
  border-bottom-right-radius: ${resp(20)}px;
  justify-content: center;
  align-items: center;
`;

export const Icon_Container = styled.View`
  width: ${resp(70)}px;
  height: ${resp(120)}px;
  background-color: pink;
`;

export const Button_Left_Text = styled.Text`
  color: ${Global_Secundary};
  font-weight: 400;
  font-size: ${resp(18)}px;
  width: 65%;
  margin-left: ${resp(10)}px;
`;

