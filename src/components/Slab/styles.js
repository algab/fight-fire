import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    label: {
        marginLeft: 1,
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    button: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#D90B0B',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#FFF',
        fontSize:  14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});
