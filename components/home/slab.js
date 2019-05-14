import React from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { Content, Input, Form, Item, Picker, Icon, Button } from 'native-base';

class Slab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { global: undefined, type: undefined, armor: undefined, height: undefined, cobr: undefined, width: undefined, depth: undefined }
    }

    typeValue(value) {
        this.setState({ type: value });
    }

    changeArmor(value) {
        setTimeout(() => {
            this.setState({ armor: parseFloat(value) });
        }, 600);
    }

    changeHeight(value) {
        setTimeout(() => {
            this.setState({ height: parseFloat(value) });
        }, 600);
    }

    changeCobr(value) {
        setTimeout(() => {
            this.setState({ cobr: parseFloat(value) });
        }, 600);
    }

    changeWidth(value) {
        setTimeout(() => {
            this.setState({ width: parseFloat(value) });
        }, 600);
    }

    changeDepth(value) {
        setTimeout(() => {
            this.setState({ depth: parseFloat(value) });
        }, 600);
    }

    calcSlabMacica() {
        const c1 = this.state.cobr + (this.state.armor / 2);
        let trrfHeight = null
        let trrfC1 = null

        if (this.state.height >= 60 && this.state.height < 80) {
            trrfHeight = 30
        }
        else if (this.state.height >= 80 && this.state.height < 100) {
            trrfHeight = 60
        }
        else if (this.state.height >= 100 && this.state.height < 120) {
            trrfHeight = 90
        }
        else if (this.state.height >= 120 && this.state.height < 150) {
            trrfHeight = 120
        }
        else if (this.state.height >= 150) {
            trrfHeight = 180
        }

        if (c1 >= 10 && c1 < 15) {
            trrfC1 = 60
        }
        else if (c1 >= 15 && c1 < 20) {
            trrfC1 = 90
        }
        else if (c1 >= 20 && c1 < 30) {
            trrfC1 = 120
        }
        else if (c1 >= 30) {
            trrfC1 = 180
        }     
        

        if (trrfC1 <= trrfHeight) {          
           return trrfC1;
        }
        else {
            return trrfHeight;
        }
    }

    pressButton() {       
        let trrf = null;
        if (this.state.type === "1") {           
            trrf = this.calcSlabMacica();       
        }
        Alert.alert(
            "Resultado:", `TRRF: ${trrf} min`,
            [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Continuar'
                }
            ]
        )
    }

    render() {
        return (
            <Content>
                <Form>
                    <Item picker style={[styles.input, styles.height]}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="SELECIONE O TIPO DA LAJE:"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.type}
                            onValueChange={this.typeValue.bind(this)}>
                            <Picker.Item label="SELECIONE O TIPO DA LAJE:" />
                            <Picker.Item label="Laje Maciça" value="1" />
                            <Picker.Item label="Laje Nervurada Treliçada" value="2" />
                        </Picker>
                    </Item>
                    <Item regular style={styles.input}>
                        <Input placeholder="Digite a armadura longitudinal (mm)" keyboardType="numeric" onChangeText={(text) => this.changeArmor(text)} />
                    </Item>
                    <Item regular style={styles.input}>
                        <Input placeholder="Digite a altura da laje (mm)" keyboardType="numeric" onChangeText={(text) => this.changeHeight(text)} />
                    </Item>
                    {this.state.type === "1" && (
                        <Item regular style={[styles.input, { marginBottom: 100 }]}>
                            <Input placeholder="Digite o cobrimento (mm)" keyboardType="numeric" onChangeText={(text) => this.changeCobr(text)} />
                        </Item>
                    )}
                    {this.state.type === "2" && (
                        <Item regular style={styles.input}>
                            <Input placeholder="Digite o cobrimento (mm)" keyboardType="numeric" onChangeText={(text) => this.changeCobr(text)} />
                        </Item>
                    )}
                    {this.state.type === "2" && (
                        <Item regular style={styles.input}>
                            <Input placeholder="Digite a largura da nervura da laje (mm)" keyboardType="numeric" onChangeText={(text) => this.changeWidth(text)} />
                        </Item>
                    )}
                    {this.state.type === "2" && (
                        <Item regular style={[styles.input, { marginBottom: 30 }]}>
                            <Input placeholder="Digite a espessura da capa (mm)" keyboardType="numeric" onChangeText={(text) => this.changeDepth(text)} />
                        </Item>
                    )}
                </Form>
                <View style={{marginTop: 35}}>
                    <Button rounded primary style={styles.button} onPress={() => this.pressButton()}>
                        <Icon name='arrow-forward' />
                    </Button>
                </View>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    height: {
        marginTop: 2
    },
    input: {
        marginBottom: 25
    },
    button: {
        position: 'absolute',
        bottom: 10,
        right: 7
    }
});

export default Slab;