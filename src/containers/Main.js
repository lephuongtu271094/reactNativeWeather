import React, { Component } from 'react';
import HomeView from '../components/Home/HomeView';
import {listData} from '../../data/data';

export default class Main extends Component {
    render() {
        console.disableYellowBox = true;
        return (<HomeView navigation={this.props.navigation} listData={listData}/>);
    }
}
