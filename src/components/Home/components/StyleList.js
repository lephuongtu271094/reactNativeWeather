import { StyleSheet } from 'react-native';

export const colors = {
    secondary: '#0686E4',
    tertiary: '#ffffff',
    background_dark: '#F0F0F0',
    text_light: '#ffffff',
    text_medium: '#464646',
    text_dark: '#263238',
    weather_text_color: '#464646',
    transparent_white: '#FFFFFF00',
    separator_background: '#E2E2E2',
};

export const values = {
    font_body: 'Avenir',
    font_body_size: 14,
    font_title_size: 20,
    font_time_size: 12,
    font_place_size: 20,
    font_temp_size: 27,
    border_radius: 2,
    tiny_icon_size: 22,
    small_icon_size: 40,
    large_icon_size: 110,
};

export const homeScreenList = StyleSheet.create(
    {
        row: {
            elevation: 1,
            borderRadius: 2,
            backgroundColor: colors.tertiary,
            flex: 1,
            flexDirection: 'row',  // main axis
            justifyContent: 'flex-start', // main axis
            alignItems: 'center', // cross axis
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 18,
            paddingRight: 16,
            marginLeft: 14,
            marginRight: 14,
            marginTop: 0,
            marginBottom: 6,
        },
        row_cell_timeplace: {
            flex: 1,
            flexDirection: 'column',
        },
        row_cell_temp: {
            color: colors.weather_text_color,
            paddingLeft: 16,
            flex: 0,
            fontSize: values.font_temp_size,
            fontFamily: values.font_body,
        },
        row_time: {
            color: colors.weather_text_color,
            textAlignVertical: 'bottom',
            includeFontPadding: false,
            flex: 0,
            fontSize: values.font_time_size,
            fontFamily: values.font_body,
        },
        row_place: {
            color: colors.weather_text_color,
            textAlignVertical: 'top',
            includeFontPadding: false,
            flex: 0,
            fontSize: values.font_place_size,
            fontFamily: values.font_body,
        },
    });
