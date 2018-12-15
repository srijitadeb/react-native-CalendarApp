import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import WeeklyAgenda from '../components/Agenda';
class AgendaScreen extends Component {
    state = {  }
    render() { 
        const {navigation} = this.props;
        const { params } = this.props.navigation.state;
        return (
            <View style={{height: 100}}>     
                <WeeklyAgenda day={params["day"]} navigation={navigation}>
                    <StatusBar backgroundColor="#28F1A6" />
                </WeeklyAgenda >
            </View>
        );
    }
}
 
WeeklyAgenda.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default AgendaScreen;