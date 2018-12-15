import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { Fab, Icon } from 'native-base';
import PropTypes from 'prop-types';

import { CalendarList } from 'react-native-calendars';
class Calendar extends Component {
    constructor(props) {
        super(props);
         this.state = {
            active: 'true',
            selected:''
        }
    }

    render() { 
        const {onSelect, navigation} = this.props;
        return ( 
            <View>
                <CalendarList
                    markingType={'period'}
                    onDayPress={(day) => 
                        {
                             onSelect(day, navigation) 
                             console.log(this.state);   
                        }
                    }
                    pastScrollRange={12}
                    futureScrollRange={12}
                    scrollEnabled={true}
                    showScrollIndicator={true}
                    theme = {
                        {
                            todayTextColor: '#28F1A6',
                        }
                    }
                />
                {/* <TouchableHighlight underlayColor={'#EEE'} style={styles.calendarArrowWrapper} onPress={(day) => navigation.navigate('Agenda', day)}>
                    <Icon style={styles.calendarForwardArrow} type='MaterialIcons' name='view-week' />
                </TouchableHighlight> */}
                {/* <View >
                    <Fab
                        active={!this.state.active}
                        direction="up"
                        style={{ backgroundColor: '#28F1A6'}}
                        position = 'bottomRight'
                        onPress={() => navigation.navigate('Reminder')}>
                        <Icon type='MaterialCommunityIcons' name="reminder" />
                    </Fab>
                </View> */}
            </View>
         );
    }
}

Calendar.propTypes = {
    onSelect: PropTypes.func,
}

const styles = StyleSheet.create({
    calendarForwardArrow: {
            color: 'white',
            fontSize: 40,
        },
    calendarArrowWrapper: {
        position: 'absolute',
        top: -50,
        right: 10,
        zIndex: 2
    }
});
 
export default Calendar;