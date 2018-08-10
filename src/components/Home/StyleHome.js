import { StyleSheet } from 'react-native';

export const HomeScreen = StyleSheet.create(
    {
        v_container: {
            flex: 1,
            padding: 8,
            flexDirection: 'column', // main axis
            justifyContent: 'center', // main axis
            alignItems: 'center', // cross axis
            backgroundColor: '#F0F0F0',
        },
        container: {
            marginTop: 14,
            alignSelf: 'stretch',
        }
    });

export const addDegreesToEnd = (temp) => {
    return `${temp}${String.fromCharCode(176)}`;
};
