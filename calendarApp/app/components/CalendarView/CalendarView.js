import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import styles from './styles';

class CalendarView extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    // constructor(props) {
    //     super(props);
    //     this.state ={}
    // }
    render(){

        //const {navigation} =  this.props;
        return(
            <View>
                <CalendarList
                        // Callback which gets executed when visible months change in scroll view. Default = undefined
                        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={4}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={3}
                        // Enable or disable scrolling of calendar list
                        //scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={true}
                        onDayChange={(day)=>{console.log('day changed')}}
                        onDayPress={(day) => this.props.navigation.navigate('Reminder')}
                        
                    />
            </View>
        )
    }
};

export default CalendarView;