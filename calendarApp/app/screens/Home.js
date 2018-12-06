import React from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/container';
import { Splash } from '../components/splash';
import { CalendarView } from '../components/CalendarView'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default ()=> (
    <Container>
        <StatusBar translucent ={false} barStyle="default" />
        <Splash />
        <CalendarView />
    </Container>
);