import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class HomeView extends Component {
    render() {
        return (
            <View>
                <Text>this is home</Text>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.push('Screen_DetailCity'); }}
                >
                    <Text>next to detal city</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
