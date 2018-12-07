import React from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from '../components/container';
import { Splash } from '../components/splash';
import { CalendarView } from '../components/CalendarView'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

let Home = ({navigation}) => (
  <Container>
        <StatusBar translucent ={false} barStyle="default" />
        <Splash />
        <CalendarView navigation={navigation}  />
  </Container>
);

Home.propTypes = {
  navigation: PropTypes.object
};
export default Home;