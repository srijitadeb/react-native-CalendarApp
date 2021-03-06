import React, { Component } from 'react';
import { View,StyleSheet, AsyncStorage, TextInput, Alert, TouchableOpacity } from 'react-native';
import {
    Form,
    Button, Icon,
    DatePicker, Text
} from 'native-base';
import PropTypes from 'prop-types';
class Reminder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenDate: this.props.navigation.state.params.selectedDay,
            text: '',
        };
        this.setDate = this.setDate.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.saveData = this.saveData.bind(this);
        console.log("remminder screen", this.props);
    }

    setDate(newDate) {
        console.log(newDate);
        this.setState({
            chosenDate: newDate
        });
    }

    handleChangeInput = (text) =>  {
        this.setState({text:text});
    }

    
    render() { 
        return ( 
            <View>
                <Form style={styles.formContainer}>
                    <View style={styles.formView}>

                        < TextInput style={styles.textInput}
                            placeholder = "Remind me to ..."
                            onChangeText={this.handleChangeInput}
                            value={this.state.input}
                        />
                       <DatePicker style={styles.formContainer}
                            defaultDate={new Date()}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                        />
                        <Text>
                            Selected Date: {this.state.chosenDate.toString().substr(4, 12)}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <Button block success style={styles.saveBtn} onPress={this.saveData}>
                            <Text>Set Reminders</Text>
                        </Button>
                    </View>
                </Form>
            </View> 
        );
    }

    async saveData(){
        // console.log(this.state);
        let {chosenDate, ...text} =  this.state;
        let textInput = Object.entries(text).map(([key, value])=> ({[key]: value}));
        console.log(textInput);
        if (textInput[0].text === "") {
            alert("Set your Reminder");
        }
        else {
            let fomattedData = {};
            let keyData = await AsyncStorage.getItem("inputData");
            console.log({keyData});
            if(keyData) {
                fomattedData = JSON.parse(keyData);
            }
            if(fomattedData[chosenDate]) {
                fomattedData[chosenDate] = fomattedData[chosenDate].concat(textInput);
            }
            else {
                fomattedData[chosenDate] = textInput;
            }
            console.log({fomattedData});
            AsyncStorage.setItem("inputData", JSON.stringify(fomattedData));
            alert("Reminder Created");
            this.props.navigation.navigate('Agenda');
        }
       
    }
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 10,
        padding: 10,
    },
    textInput:{
        fontSize:30
    },
    editIcon:{
        color: '#28F1A6',
        fontSize: 26,
    },
    editBtn:{
        flex: 1,
        alignSelf: 'flex-end',
    }, 
    datePicker:{
        alignSelf: 'auto',
        paddingLeft: 10
    },
    footer:{
        position: 'relative',
        top: 350
    },
    saveBtn: {
        position:'relative',
        marginTop: 35,
        height:50,
        backgroundColor:'blue',
        fontSize:23
    }
});

export default Reminder;