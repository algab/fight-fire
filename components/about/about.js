import React from "react";
import { View, StyleSheet } from 'react-native';
import { Container, Content, Thumbnail, Text } from 'native-base';

import HeaderApp from '../header/header';

const fire_truck = require("../../assets/fire-truck-512x512.png");

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <HeaderApp />
                <Content>
                    <View style={styles.view}>
                        <Thumbnail large source={fire_truck} style={{height:120,width:120}} />
                        <Text style={styles.title}>Fight Fire</Text>
                        <Text style={styles.about}>
                            Aplicativo para o cálculo do tempo requerido de resistência ao fogo (TRRF) das estruturas
                            de concreto armado conforme as recomendações das normas ABNT 14432 e ABNT 15200. 
                        </Text>
                        <Text style={styles.version}>v1.0.0</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    about: {
        fontSize: 15,
        textAlign: 'center'
    },
    version: {
        fontSize: 12,
        color: 'gray'
    }
});

export default About;