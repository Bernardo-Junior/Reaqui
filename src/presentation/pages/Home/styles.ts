import styled from 'styled-components/native';
import { Global_Primary, Global_Secundary, Global_Tertiary } from '../../../utils/global';

import resp from '../../../utils/responsivity';

export const Home_Container = styled.View`
  width: 85%;

  margin-bottom: ${resp(100)}px;
  align-self: center;
`;

export const Logo_Container = styled.View`
  width: 100%;
  height: 15%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const Icone_Reaqui = styled.Image`
  width: ${resp(110)}px;
  height: ${resp(90)}px;
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
  margin-bottom: ${resp(30)}px;
`;

export const Menu_Container = styled.TouchableOpacity`
  margin-top: ${resp(40)}px;
  width: 95%;
  height: ${resp(230)}px;
  align-self: center;
  border-radius: ${resp(20)}px;
  background-color: #DDEAEE;
  border: 0.2px;
  border-color: #FFFFFF;
`;

export const Menu_Img1 = styled.Image`
  width: 50%;
  height: 50%;
  right: 72%;
  bottom: 69%;
  position: absolute;
`;

export const Menu_img2 = styled.Image`
  width: 40%;
  height: 52%;
  left: 75%;
  top: 65%;
  position: absolute;
`;

export const Menu_Titulo1 = styled.Text`
  align-self: flex-end;
  color: ${Global_Secundary};
  font-size: ${resp(25)}px;
  letter-spacing: ${resp(1)}px;
  margin-right: ${resp(25)}px;
  margin-top: ${resp(30)}px;
`;

export const Menu_Titulo2 = styled.Text`
  align-self: flex-start;
  color: ${Global_Secundary};
  font-size: ${resp(25)}px;
  letter-spacing: ${resp(1)}px;
  margin-left: ${resp(25)}px;
  margin-top: ${resp(30)}px;
`;

export const Menu_Texto1 = styled.Text`
  align-self: flex-end;
  width: 85%;
  font-size: ${resp(15)}px;
  text-align: right;
  color: ${Global_Tertiary};
  line-height: 20px;
  font-weight: 600;
  margin-right: ${resp(25)}px;
  margin-top: ${resp(20)}px;
`;

export const Menu_Texto2 = styled.Text`
  align-self: flex-start;
  width: 90%;
  font-size: ${resp(15)}px;
  text-align: left;
  color: ${Global_Tertiary};
  line-height: 20px;
  font-weight: 600;
  margin-left: ${resp(25)}px;
  margin-top: ${resp(20)}px;
`;