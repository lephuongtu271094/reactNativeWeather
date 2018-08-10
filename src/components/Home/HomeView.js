import React, { Component } from 'react';
import ListCity from './components/ListCity';
import {
    View,
    FlatList
} from 'react-native';
import * as css from './StyleHome';

export default class HomeView extends Component {

    _navigation;

    renderRow({ item }) {
        const { icon, place, time, currentTemp } = item;
        const temp = css.addDegreesToEnd(currentTemp);
        return (
            <ListCity
                navigation={_navigation}
                icon={icon}
                place={place}
                time={time}
                temp={temp}
            />
        )
    };

    render() {
        const { navigation, listData } = this.props;
        _navigation = navigation;
        return (
            <View style={css.HomeScreen.v_container}>
                <FlatList
                    style={css.HomeScreen.container}
                    data={listData}
                    renderItem={this.renderRow}
                />
            </View>
        );
    }
}
