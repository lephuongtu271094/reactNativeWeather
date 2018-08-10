import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import * as css from './StyleList';
import { Icon } from 'react-native-elements';

class ListCity extends Component {
    render() {
        const {navigation,icon,place,temp,time} = this.props;
        const {iconColor,iconFont,iconName} = icon;
        return (
            
            <TouchableHighlight
                activeOpacity={0.5}
                underlayColor='#FFFFFF00'
                onPress={() => { navigation.navigate('Screen_DetailCity'); }}
            >
                <View style={css.homeScreenList.row}>
                    <View style={css.homeScreenList.row_cell_timeplace}>
                        <Text style={css.homeScreenList.row_time}>{time}</Text>
                        <Text style={css.homeScreenList.row_place}>{place}</Text>
                    </View>
                    <Icon color={iconColor} size={css.values.small_icon_size} name={iconName}
                  type={iconFont}/>
                    <Text style={css.homeScreenList.row_cell_temp}>{temp}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default ListCity;
