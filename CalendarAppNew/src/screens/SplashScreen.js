import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import SplashAnimation from '../components/SplashAnimation';

const SplashScreen = ({navigation}) => (
    <View style={styles.container} >
        <SplashAnimation navigation={navigation}>
            <StatusBar hidden backgroundColor="#28F1A6" />
            <View style={styles.titleWrapper}>
               <Text style={styles.appName}>
                    Calendar App
                </Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.subtitle}>
                    A React Native App
                </Text>
            </View>
        </SplashAnimation>
    </View>
);

SplashScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#28F1A6"
    },
   titleWrapper: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'row',
   },
   appName: {
        fontSize: 32,
        color: '#ffffff',
        fontWeight: 'bold'
   },
   footer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SplashScreen;