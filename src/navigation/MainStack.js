import {
    StackNavigator,
} from 'react-navigation';
import Main from '../containers/Main';
import DetailCityView from '../components/City/DetailCityView';

export const MainStack = StackNavigator(
    {
        Screen_Main: {
            screen: Main
        },
        Screen_DetailCity: {
            screen: DetailCityView
        }
    }
);
