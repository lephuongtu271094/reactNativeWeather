import React, { Component } from 'react';
import HomeView from './Home/HomeView';

export default class Main extends Component {
    render() {
        console.disableYellowBox = true;
        return (<HomeView navigation={this.props.navigation} />);
    }
}
