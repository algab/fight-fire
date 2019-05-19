import React from "react";
import { Modal } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';
import { Container, Content, List, ListItem, Text, Body, Right, Button } from 'native-base';

import HeaderApp from "../header/header";

const tables = require("../../tables.json");

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false, position: 0, images: [
                {
                    props: { source: require("../../assets/table7.png") }
                },
                {
                    props: { source: require("../../assets/table6.png") }
                },
                {
                    props: { source: require("../../assets/table11.png") }
                },
                {
                    props: { source: require("../../assets/table5.png") }
                },
                {
                    props: { source: require("../../assets/table12.png") }
                }
            ]
        };
    }

    setModal(modal) {
        this.setState({ modal });
    }

    visibleModal(modal,position) {
        this.setState({modal,position})
    }

    list() {
        let listItem = [];
        tables.map((data,index) => {
            listItem.push(
                <ListItem thumbnail key={index}>
                    <Body>
                        <Text>{data.name}</Text>
                        <Text note numberOfLines={7}>{data.description}</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.visibleModal(true,index)}>
                            <Text>Visualizar</Text>
                        </Button>
                    </Right>
                </ListItem>
            )
        });
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
                    <ImageViewer index={this.state.position} imageUrls={this.state.images} />
                </Modal>
            </Container>
        )
    }
}


export default Table;