import React from "react";
import { Constants } from 'expo';
import { StyleSheet } from 'react-native';
import { Header, Body, Left, Title, Icon } from 'native-base';

class HeaderApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header style={styles.header}>
                <Left>
                    <Icon type="FontAwesome" name="fire" style={{color: 'white'}} />
                </Left>
                <Body>
                    <Title>Fight Fire</Title>
                </Body>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 30,
        backgroundColor: '#8b0000'
    }
});

export default HeaderApp;