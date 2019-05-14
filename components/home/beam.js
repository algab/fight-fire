import React from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { Content, Input, Form, Item, Picker, Icon, Label, Button } from 'native-base';

class Beam extends React.Component {
    constructor(props) {
        super(props);
        this.state = { global: undefined, trrf: undefined }
    }

    render() {
        if (this.state.global != undefined) {
        }
        else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{textAlign:'center'}}>Por favor, calcule o TRRF Global para depois calcular o TRRF da Viga.</Text>
                </View>
            )
        }
    }
}

export default Beam;