import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import Home from '../../../presentation/pages/Home';

import Sobre from '../../../presentation/pages/Sobre';

import Politica from '../../../presentation/pages/PoliticaEPrivacidade';

import Estudar from '../../../presentation/pages/Home/Estudar';

import Quiz from '../../../presentation/pages/Home/Quiz';

import Adicao from '../../../presentation/pages/Home/Estudar/Reacoes/Adicao';

import Decomposicao from '../../../presentation/pages/Home/Estudar/Reacoes/Decomposicao';

import Deslocamento from '../../../presentation/pages/Home/Estudar/Reacoes/Deslocamento';

import TrocaDupla from '../../../presentation/pages/Home/Estudar/Reacoes/TrocaDupla';

import Substituicao from '../../../presentation/pages/Home/Estudar/Reacoes/Substituicao';

import Eliminacao from '../../../presentation/pages/Home/Estudar/Reacoes/Eliminação';

import Oxidacao from '../../../presentation/pages/Home/Estudar/Reacoes/Oxidacao';

import resp from '../../../utils/responsivity';

import {
  styles
} from './styles';
import { Text } from 'react-native';


const Stack = createStackNavigator();

const StackHome: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Estudar" component={Estudar} />
      <Stack.Screen name="Adicao" component={Adicao} />
      <Stack.Screen name="Decomposicao" component={Decomposicao} />
      <Stack.Screen name="Deslocamento" component={Deslocamento} />
      <Stack.Screen name="TrocaDupla" component={TrocaDupla} />
      <Stack.Screen name="Substituicao" component={Substituicao} />
      <Stack.Screen name="Eliminacao" component={Eliminacao} />
      <Stack.Screen name="Oxidacao" component={Oxidacao} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  )
}

const BottomNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            if (focused === true) {
              return (
                <Ionicons
                  name="home"
                  color="#000000"
                  size={resp(25)}
                />
              )
            } else {
              return (
                <Ionicons
                  name="home-outline"
                  color="#000000"
                  size={resp(25)}
                />
              )
            }
          } else if (route.name === 'Sobre') {
            if (focused === true) {
              return (
                <Ionicons
                  name="information-circle-sharp"
                  color="#000000"
                  size={resp(25)}
                />
              )
            } else {
              return (
                <Ionicons
                  name="information-circle-outline"
                  color="#000000"
                  size={resp(25)}
                />
              )
            }
          } 
          // else if (route.name === 'Politica') {
          //   if (focused === true) {
          //     return (
          //       <Ionicons
          //         name="shield-checkmark"
          //         color="#000000"
          //         size={resp(25)}
          //       />
          //     )
          //   } else {
          //     return (
          //       <Ionicons
          //         name="shield-checkmark-outline"
          //         color="#000000"
          //         size={resp(25)}
          //       />
          //     )
          //   }
          // }
        },
        tabBarLabel: ({ focused }) => {
          let label;
          switch (route.name) {
            case 'Home':
              return label = focused ?
                <Text style={styles.activeTabText}>Home</Text>
                :
                <Text style={styles.inactiveTabText}>Home</Text>
            case 'Sobre':
              return label = focused ?
                <Text style={styles.activeTabText}>Sobre</Text>
                :
                <Text style={styles.inactiveTabText}>Sobre</Text>
            // case 'Politica':
            //   return label = focused ?
            //     <Text style={styles.activeTabText}>Política</Text>
            //     :
            //     <Text style={styles.inactiveTabText}>Política</Text>
          }
          return label
        }
      })}
      tabBarOptions={{
        // tabStyle: styles.tabStyle,
        activeTintColor: '#000000',
        // labelStyle: styles.labelStyle,
        style: { backgroundColor: '#C8D7DB' },
        // labelPosition: "below-icon",
        inactiveTintColor: '#000000',
      }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={StackHome} />
      <Tab.Screen name="Sobre" component={Sobre} />
      {/* <Tab.Screen name="Politica" component={Politica} /> */}
    </Tab.Navigator>
  )
}

export default BottomNavigator;

