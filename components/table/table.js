import React from "react";
import { Modal } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import HeaderApp from "../header/header";

const fireTruck = require("../../assets/fire-truck-512x512.png");

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: false };
    }

    setModal(modal) {
        this.setState({ modal });
    }

    list() {
        let listItem = [];
        for (let i = 0; i < 5; i++) {
            listItem.push(
                <ListItem thumbnail key={i}>
                    <Left>
                        <Thumbnail square source={fireTruck} />
                    </Left>
                    <Body>
                        <Text>Sankhadeep</Text>
                        <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.setModal(true)}>
                            <Text>Visualizar</Text>
                        </Button>
                    </Right>
                </ListItem>
            )
        }
        return listItem;
    }

    render() {
        return (
            <Container>
                <HeaderApp />
                <Content>
                    <List>
                        {this.list()}
                    </List>
                </Content>
                <Modal visible={this.state.modal} transparent={true} onRequestClose={() => this.setModal(false)} >
                    <ImageViewer enableImageZoom={true} imageUrls={[{ props: { source: fireTruck } }]} />
                </Modal>
            </Container>
        )
    }
}


export default Table;