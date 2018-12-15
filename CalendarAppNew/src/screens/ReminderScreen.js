import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import Reminder from '../components/Reminder';

const ReminderScreen = ({navigation}) => (
    <View >
        <Reminder navigation={navigation} >
            <StatusBar backgroundColor = "#28F1A6" />
         </Reminder >
    </View>
);

Reminder.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default ReminderScreen;