import { TabNavigator } from 'react-navigation';
import Today from '../components/City/components/Today';
import Weekly from '../components/City/components/Weekly';

export const Tab = TabNavigator({
    TODAY: { screen: Today },
    WEEKLY: { screen: Weekly },
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        labelStyle: {
            fontSize: 18,
            padding: 12
        }
    }
}

);
