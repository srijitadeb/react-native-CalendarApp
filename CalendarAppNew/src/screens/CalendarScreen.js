import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import Calendar from '../components/Calendar';

const CalendarScreen = ({navigation}) => (
    <View >
        <Calendar  navigation={navigation} 
            onSelect={(day, navigation)=>{
            navigation.navigate('Agenda', {day}) }}>
            <StatusBar backgroundColor="#28F1A6" />
        </Calendar >
    </View>
);

Calendar.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default CalendarScreen;