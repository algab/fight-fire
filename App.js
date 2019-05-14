import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './components/home/home';
import Table from './components/table/table';
import About from './components/about/about';

const App = createAppContainer(
  createBottomTabNavigator({
    Home : {
      screen: Home,
      navigationOptions: {
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#8b0000" />
        )
      }
    },
    Table: {
      screen: Table,
      navigationOptions: {
        tabBarLabel:"Tabela",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="table" size={30} color="#8b0000" />
        )
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarLabel:"Sobre",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="info-circle" size={30} color="#8b0000" />
        )
      }
    }
  },
  {
    order: ['Home', 'Table','About'],
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#8b0000',
      style: {
        backgroundColor: 'white',
      }
    },
  })
)

export default App;