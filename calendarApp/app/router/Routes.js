import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from "react-navigation";
import Home from '../screens/Home';
import AgendaScreen from '../screens/AgendaScreen';
import ReminderScreen from '../screens/ReminderScreen';

export default StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Calendar',
            },
        },
        Agenda:{
            screen: AgendaScreen,
            navigationOptions:{
                title:'Weekly View'
            }
        },
        Reminder:{
            screen: ReminderScreen,
            navigationOptions: {
                title: 'Reminder'
            }
        }
    },
    {
        initialRouteName: "Home"
    }
);

//export default createAppContainer(AppNavigator);

//const Routes = createAppContainer(AppNavigator);
//export default Routes;