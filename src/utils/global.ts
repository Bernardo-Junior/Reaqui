import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Global_Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F7F7F7;
`;

export const Global_Primary = "#C8D7DB";
export const Global_Secundary = "#484848";
export const Global_Tertiary = "#777777";

export const Global_styles = StyleSheet.create({
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  }
});