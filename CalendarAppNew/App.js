import React, {Component} from 'react';
import {View} from 'react-native';
import { Container } from 'native-base';

import Routes from './src/config/routes';
export default class App extends Component {
  render() {
    return (
      <Container>
        <Routes/>
      </Container>
    );
  }
}