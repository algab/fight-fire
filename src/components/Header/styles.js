import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    header: {
        marginTop: Constants.statusBarHeight,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#B20909'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
        paddingLeft: 15
    },
    icon: {
        color: '#fff'
    }
});
