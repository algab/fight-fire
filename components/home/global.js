import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Content, Input, Form, Item, Picker, Icon, Button } from 'native-base';

const trrf = require("../../trrf.json");

class Global extends React.Component {
    constructor(props) {
        super(props);
        this.state = { height: undefined, building: undefined, subBuilding: undefined, trrf: undefined };
    }

    heightValue(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ height: undefined });
            }
            else {
                this.setState({ height: parseFloat(value) });
            }
            if (this.state.height != undefined && this.state.building != undefined && this.state.subBuilding != undefined) {
                this.trrf();
            }
        }, 800);
    }

    buildingValue(value) {
        this.setState({ building: value });
        if (this.state.height != undefined && this.state.building != undefined && this.state.subBuilding != undefined) {
            this.trrf();
        }
    }

    subBuildingValue(value) {
        setTimeout(() => {
            this.setState({ subBuilding: value });
            if (this.state.height != undefined && this.state.building != undefined && this.state.subBuilding != undefined) {
                this.trrf();
            }
        }, 50)
    }

    building() {
        let building = [];
        trrf.map((data,index) => {
            building.push(<Picker.Item label={data.name} value={data.id} key={index} />)
        });
        return building;
    }

    subBuilding() {
        let subBuilding = [];
        trrf.map(data => {
            if (this.state.building === data.id) {
                data.examples.map((data,index) => {
                    subBuilding.push(<Picker.Item label={data.name} value={data.id} key={index} />)
                });                
            }
        });
        return subBuilding;
    }

    verifyButton() {
        if (this.state.height != undefined && this.state.building != undefined && this.state.subBuilding != undefined) {
            return false;
        }
        else {
            return true;
        }
    }

    pressButton() {
        Alert.alert(
            "Resultado", `Classe: ${this.state.trrf.class}\nTRRF: ${this.state.trrf.minutes} min`,
            [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Continuar',
                    onPress: () => this.props.changePage(1, this.state.trrf)
                }
            ]
        )
    }

    trrf() {
        const height = this.state.height;
        const building = this.state.building;
        const subBuilding = this.state.subBuilding;
        if (building === "a") {
            if (height <= 6) {
                this.setState({ trrf: { class: "P1", minutes: "30" } })
            }
            else if (height > 6 && height <= 12) {
                this.setState({ trrf: { class: "P2", minutes: "30" } })
            }
            else if (height > 12 && height <= 23) {
                this.setState({ trrf: { class: "P3", minutes: "60" } })
            }
            else if (height > 23 && height <= 30) {
                this.setState({ trrf: { class: "P4", minutes: "90" } })
            }
            else if (height > 30) {
                this.setState({ trrf: { class: "P5", minutes: "120" } })
            }
        }
        else if (building === "b") {
            if (height <= 6) {
                this.setState({ trrf: { class: "P1", minutes: "30" } })
            }
            else if (height > 6 && height <= 12) {
                this.setState({ trrf: { class: "P2", minutes: "60" } })
            }
            else if (height > 12 && height <= 23) {
                this.setState({ trrf: { class: "P3", minutes: "60" } })
            }
            else if (height > 23 && height <= 30) {
                this.setState({ trrf: { class: "P4", minutes: "90" } })
            }
            else if (height > 30) {
                this.setState({ trrf: { class: "P5", minutes: "120" } })
            }
        }
        else if (building === "c") {
            if (height <= 6) {
                this.setState({ trrf: { class: "P1", minutes: "60" } })
            }
            else if (height > 6 && height <= 12) {
                this.setState({ trrf: { class: "P2", minutes: "60" } })
            }
            else if (height > 12 && height <= 23) {
                this.setState({ trrf: { class: "P3", minutes: "60" } })
            }
            else if (height > 23 && height <= 30) {
                this.setState({ trrf: { class: "43", minutes: "90" } })
            }
            else if (height > 30) {
                this.setState({ trrf: { class: "P5", minutes: "120" } })
            }
        }
        else if (building === "d") {
            if (height <= 6) {
                this.setState({ trrf: { class: "P1", minutes: "30" } })
            }
            else if (height > 6 && height <= 12) {
                this.setState({ trrf: { class: "P2", minutes: "60" } })
            }
            else if (height > 12 && height <= 23) {
                this.setState({ trrf: { class: "P3", minutes: "60" } })
            }
            else if (height > 23 && height <= 30) {
                this.setState({ trrf: { class: "P4", minutes: "90" } })
            }
            else if (height > 30) {
                this.setState({ trrf: { class: "P5", minutes: "120" } })
            }
        }
        else if (building === "e") {
            if (height <= 6) {
                this.setState({ trrf: { class: "P1", minutes: "30" } })
            }
            else if (height > 6 && height <= 12) {
                this.setState({ trrf: { class: "P2", minutes: "30" } })
            }
            else if (height > 12 && height <= 23) {
                this.setState({ trrf: { class: "P3", minutes: "60" } })
            }
            else if (height > 23 && height <= 30) {
                this.setState({ trrf: { class: "P4", minutes: "90" } })
            }
            else if (height > 30) {
                this.setState({ trrf: { class: "P5", minutes: "120" } })
            }
        }
        else if (building === "f") {
            if (height <= 6) {
                this.setState({ trrf: { class: "P1", minutes: "60" } })
            }
            else if (height > 6 && height <= 12) {
                this.setState({ trrf: { class: "P2", minutes: "60" } })
            }
            else if (height > 12 && height <= 23) {
                this.setState({ trrf: { class: "P3", minutes: "60" } })
            }
            else if (height > 23 && height <= 30) {
                this.setState({ trrf: { class: "P4", minutes: "90" } })
            }
            else if (height > 30) {
                this.setState({ trrf: { class: "P5", minutes: "120" } })
            }
        }
        else if (building === "g") {
            if (subBuilding == "g-1-2" || subBuilding == "g-2-2" || subBuilding == "g-3" || subBuilding == "g-4" || subBuilding == "g-5") {
                if (height <= 6) {
                    this.setState({ trrf: { class: "P1", minutes: "30" } })
                }
                else if (height > 6 && height <= 12) {
                    this.setState({ trrf: { class: "P2", minutes: "60" } })
                }
                else if (height > 12 && height <= 23) {
                    this.setState({ trrf: { class: "P3", minutes: "60" } })
                }
                else if (height > 23 && height <= 30) {
                    this.setState({ trrf: { class: "P4", minutes: "90" } })
                }
                else if (height > 30) {
                    this.setState({ trrf: { class: "P5", minutes: "120" } })
                }
            }
            else if (subBuilding == "g-1-1" || subBuilding == "g-2-1") {
                if (height <= 6) {
                    this.setState({ trrf: { class: "P1", minutes: "30" } })
                }
                else if (height > 6 && height <= 12) {
                    this.setState({ trrf: { class: "P2", minutes: "30" } })
                }
                else if (height > 12 && height <= 23) {
                    this.setState({ trrf: { class: "P3", minutes: "30" } })
                }
                else if (height > 23 && height <= 30) {
                    this.setState({ trrf: { class: "P4", minutes: "30" } })
                }
                else if (height > 30) {
                    this.setState({ trrf: { class: "P5", minutes: "60" } })
                }
            }
        }
        else if (building === "h") {
            if (height <= 6) {
                this.setState({ trrf: { class: "P1", minutes: "30" } })
            }
            else if (height > 6 && height <= 12) {
                this.setState({ trrf: { class: "P2", minutes: "60" } })
            }
            else if (height > 12 && height <= 23) {
                this.setState({ trrf: { class: "P3", minutes: "60" } })
            }
            else if (height > 23 && height <= 30) {
                this.setState({ trrf: { class: "P4", minutes: "90" } })
            }
            else if (height > 30) {
                this.setState({ trrf: { class: "P5", minutes: "120" } })
            }
        }
        else if (building === "i") {
            if (subBuilding === "i-1") {
                if (height <= 6) {
                    this.setState({ trrf: { class: "P1", minutes: "30" } })
                }
                else if (height > 6 && height <= 12) {
                    this.setState({ trrf: { class: "P2", minutes: "30" } })
                }
                else if (height > 12 && height <= 23) {
                    this.setState({ trrf: { class: "P3", minutes: "60" } })
                }
                else if (height > 23 && height <= 30) {
                    this.setState({ trrf: { class: "P4", minutes: "90" } })
                }
                else if (height > 30) {
                    this.setState({ trrf: { class: "P5", minutes: "120" } })
                }
            }
            else if (subBuilding === "i-2") {
                if (height <= 6) {
                    this.setState({ trrf: { class: "P1", minutes: "60" } })
                }
                else if (height > 6 && height <= 12) {
                    this.setState({ trrf: { class: "P2", minutes: "60" } })
                }
                else if (height > 12 && height <= 23) {
                    this.setState({ trrf: { class: "P3", minutes: "60" } })
                }
                else if (height > 23 && height <= 30) {
                    this.setState({ trrf: { class: "P4", minutes: "120" } })
                }
                else if (height > 30) {
                    this.setState({ trrf: { class: "P5", minutes: "120" } })
                }
            }
        }
        else if (building === "j") {
            if (subBuilding === "j-1") {
                if (height <= 6) {
                    this.setState({ trrf: { class: "P1", minutes: "30" } })
                }
                else if (height > 6 && height <= 12) {
                    this.setState({ trrf: { class: "P2", minutes: "30" } })
                }
                else if (height > 12 && height <= 23) {
                    this.setState({ trrf: { class: "P3", minutes: "30" } })
                }
                else if (height > 23 && height <= 30) {
                    this.setState({ trrf: { class: "P4", minutes: "30" } })
                }
                else if (height > 30) {
                    this.setState({ trrf: { class: "P5", minutes: "60" } })
                }
            }
            else if (subBuilding === "j-2") {
                if (height <= 6) {
                    this.setState({ trrf: { class: "P1", minutes: "60" } })
                }
                else if (height > 6 && height <= 12) {
                    this.setState({ trrf: { class: "P2", minutes: "60" } })
                }
                else if (height > 12 && height <= 23) {
                    this.setState({ trrf: { class: "P3", minutes: "60" } })
                }
                else if (height > 23 && height <= 30) {
                    this.setState({ trrf: { class: "P4", minutes: "90" } })
                }
                else if (height > 30) {
                    this.setState({ trrf: { class: "P5", minutes: "120" } })
                }
            }
        }
    }

    render() {
        return (
            <Content style={{ height: 400 }}>
                <Form style={{ marginBottom: 50 }}>
                    <Item regular style={[styles.input, { marginTop: 2 }]}>
                        <Input placeholder="Digite a altura da edificação (m)" keyboardType="numeric" onChangeText={(text) => this.heightValue(text)} />
                    </Item>
                    <Item picker regular style={styles.input}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="SELECIONE UMA EDIFICAÇÃO:"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.building}
                            onValueChange={this.buildingValue.bind(this)}>
                            <Picker.Item label="SELECIONE UMA EDIFICAÇÃO:" />
                            {this.building()}
                        </Picker>
                    </Item>
                    <Item picker regular style={styles.input}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="SELECIONE O SUBGRUPO DA EDIFICAÇÃO:"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.subBuilding}
                            onValueChange={this.subBuildingValue.bind(this)}>
                            <Picker.Item label="SELECIONE O SUBGRUPO DA EDIFICAÇÃO:" />
                            {this.subBuilding()}
                        </Picker>
                    </Item>
                </Form>
                <View style={styles.button}>
                    <Button rounded primary disabled={this.verifyButton()} onPress={() => this.pressButton()}>
                        <Icon name='arrow-forward' />
                    </Button>
                </View>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 28
    },
    button: {
        position: 'absolute',
        bottom: 5,
        right: 8
    }
});

export default Global;