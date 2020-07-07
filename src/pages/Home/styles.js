import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
    },
    label: {
        marginLeft: 1,
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    viewButton: {
        position: 'absolute',
        bottom: 10,
        right: 20,
    },
    button: {
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D90B0B',
        elevation: 15
    },
    iconButton: {
        color: '#fff'
    }
});
