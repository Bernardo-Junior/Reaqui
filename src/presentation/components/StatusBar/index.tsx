import React, { memo } from 'react';
import { 
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView, 
  ColorValue,
  StatusBarStyle
} from 'react-native';


import { Global_Primary } from '../../../utils/global';

const StatusBarComponent = () => {

  const MyStatusBar = (({backgroundColor, ...props}: any) => {
    return (
      <View >
        <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
      </View>
    )
  })
  return (
    <MyStatusBar backgroundColor={Global_Primary} barStyle="light-content" />
  )
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
})

export default memo(StatusBarComponent);