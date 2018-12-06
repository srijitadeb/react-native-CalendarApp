import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
//import Home from './screens/Home';
import AppNavigator from './router/Routes'


// app entry: set global variables and  styles
EStyleSheet.build({
    $primaryColor: '#0275d8'
  });


export default ()=> <AppNavigator />;