import { StyleSheet, Platform } from 'react-native';
import resp from '../../../utils/responsivity';


export const styles = StyleSheet.create({
  activeTabText: {
    fontWeight: "bold",
    color: '#000000',
    fontSize: resp(10),

  },
  inactiveTabText: {
    
    color: '#000000',
    fontSize: resp(10),

  }

})