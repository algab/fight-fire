import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        marginTop: 5,
        marginRight: 10,
        marginBottom: 15,
        marginLeft: 10
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
        backgroundColor: '#FA1414',
        elevation: 8
    },
    iconButton: {
        color: '#fff'
    }
});
