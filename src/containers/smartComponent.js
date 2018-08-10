import React, { Component } from 'react';
import ListCity from './components/ListCity';
import {
    View,
    ScrollView
} from 'react-native';

export default class SmartComponent extends Component {
    render() {
        return (
            <View style={css.HomeScreen.v_container}>
                <ScrollView style={css.HomeScreen.container}>
                    <ListCity navigation={this.props.navigation} />
                </ScrollView>
            </View>
        );
    }
}
