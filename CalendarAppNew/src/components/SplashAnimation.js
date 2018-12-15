import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

class SplashAnimation extends Component {

    constructor() {
        super ();
        this.state = {
            fadeAnim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.navigateToWalkthrough();
        }, 3500);

        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 3000
        }).start();
    }

    navigateToWalkthrough = () => {
        const {navigation} = this.props;
        navigation.replace('Calendar');
    }

    render() {
        const {fadeAnim} = this.state;
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    obacity: fadeAnim
                }}
                >
                {this.props.children}
            </Animated.View>
        );
    }
}

SplashAnimation.propTypes = {
    navigation: PropTypes.object.isRequired,
    children: PropTypes.array,
    style: PropTypes.object
}

export default SplashAnimation;