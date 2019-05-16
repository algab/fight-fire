import React from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { Content, Input, Form, Item, Picker, Icon, Button } from 'native-base';

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = { trrfGlobal: props.trrf, type: undefined, height: undefined, base: undefined, armorLong: undefined, armorTrans: undefined, cobr: undefined, fck: undefined, fyk: undefined, nsd: undefined, area: undefined, le: undefined, number: undefined }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ trrfGlobal: nextProps.trrf });
    }

    typeValue(value) {
        this.setState({ type: value });
    }

    changeHeight(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ height: undefined });
            }
            else {
                this.setState({ height: parseFloat(value) });
            }
        }, 600);
    }

    changeBase(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ base: undefined });
            }
            else {
                this.setState({ base: parseFloat(value) });
            }
        }, 600);
    }

    changeArmorLong(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ armorLong: undefined });
            }
            else {
                this.setState({ armorLong: parseFloat(value) });
            }
        }, 600);
    }

    changeArmorTrans(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ armorTrans: undefined });
            }
            else {
                this.setState({ armorTrans: parseFloat(value) });
            }
        }, 600);
    }

    changeCobr(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ cobr: undefined });
            }
            else {
                this.setState({ cobr: parseFloat(value) });
            }
        }, 600);
    }

    changeFCK(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ fck: undefined });
            }
            else {
                this.setState({ fck: parseFloat(value) });
            }
        }, 600);
    }

    changeFYK(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ fyk: undefined });
            }
            else {
                this.setState({ fyk: parseFloat(value) });
            }
        }, 600);
    }

    changeNSD(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ nsd: undefined });
            }
            else {
                this.setState({ nsd: parseFloat(value) });
            }
        }, 600);
    }

    changeArea(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ area: undefined });
            }
            else {
                this.setState({ area: parseFloat(value) });
            }
        }, 600);
    }

    changeLe(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ le: undefined });
            }
            else {
                this.setState({ le: parseFloat(value) });
            }
        }, 600);
    }

    changeNumber(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ number: undefined });
            }
            else {
                this.setState({ number: parseFloat(value) });
            }
        }, 600);
    }

    verifyButton() {
        if (this.state.type === "1") {
            if (this.state.height != undefined && this.state.base != undefined && this.state.armorLong != undefined && this.state.armorTrans != undefined && this.state.cobr != undefined) {
                return false;
            }
            else {
                return true;
            }
        }
        else if (this.state.type === "2") {
            if (this.state.height != undefined && this.state.base != undefined && this.state.armorLong != undefined && this.state.armorTrans != undefined && this.state.cobr != undefined && this.state.fck != undefined && this.state.fyk != undefined && this.state.nsd != undefined && this.state.area != undefined && this.state.le != undefined && this.state.number != undefined) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }

    pressButton() {
        let trrf = null;
        if (this.state.type === "1") {
            trrf = this.calcColumnEdge();
        }
        else if (this.state.type === "2") {
            trrf = this.calcColumnCorner();
        }
        if (trrf >= parseFloat(this.state.trrfGlobal.minutes)) {
            Alert.alert(
                "TRRF Pilar", `TRRF Global: ${this.state.trrfGlobal.minutes} min\nTRRF Pilar: ${trrf} min\nAtendeu a Condição`,
                [
                    {
                        text: 'Cancelar'
                    },
                    {
                        text: 'Continuar',
                        onPress: () => this.props.changePage(0, this.state.trrfGlobal)
                    }
                ]
            )            
        }
        else {
            Alert.alert(
                "TRRF Pilar", `TRRF Global: ${trrf} min\nTRRF Pilar: ${this.state.trrfGlobal.minutes}\nNão atendeu a estrutura, redimensione`,
                [
                    {
                        text: 'Cancelar'
                    }
                ]
            ) 
        }
    }

    calcColumnEdge() {
        const c1 = (this.state.cobr + this.state.armorTrans + (this.state.armorLong/2))

        let trrfBase = 180
        let trrfC1 = 180

        if (this.state.base >= 155 && this.state.base < 175) {
            trrfBase = 90;
        }
        else if (this.state.base >= 175 && this.state.base < 230) {
            trrfBase = 120;
        }
        else if (this.state.base >= 230) {
            trrfBase = 180;
        }

        if (c1 >= 25 && c1 < 35) {
            trrfC1 = 90;
        }
        else if (c1 >= 35 && c1 < 55) {
            trrfC1 = 120;
        }
        else if (c1 >= 55) {
            trrfC1 = 180;
        }

        if (trrfBase == trrfC1) {
            return 0;            
        }
        else if (trrfBase <= trrfC1) {
            return trrfBase;            
        }
        else {
            return trrfC1;
        }
    }

    calcColumnCorner() {
        const c1 = this.state.cobr + this.state.armorTrans + (this.state.armorLong/2)

        let b = 0;   
        let rn = 0;   
        let rb = 0; 

        if (c1 <= 25) {
            c1 = 25
        }
        else if (c1 >= 80) {
            c1 = 80
        }

        if (this.state.height <= (1.5 * this.state.base)) {
            b = ((2 * this.state.area)/(this.state.base + this.state.height)) * 10;
        }
        else {
            b = (1.2 * this.state.base) * 10
        }

        let mi = (0.7 * this.state.nsd) / this.state.nsd

        if (mi >= 0.7) {
            mi = 0.7
        }

        let lef = 0.5 * this.state.le

        if (lef >= 6) {
            lef = 6
        }

        if (number==4) {
            rn = 0            
        }
        else if (number > 4) {
            rn = 12
        }

        if (b >= 190 && b <= 450) {
            rb = 0.09 * b
        }
        else if (b > 450) {
            rb = 40.5
        }

        let rl = 9.60 * (5 - lef)
        let ra = 1.6 * (c1 - 30)
        let rmi = 83 * (1 - mi)

        return 120 * Math.pow(((rmi + ra + rl + rb + rn) / 120),1.8)
    }

    render() {
        if (this.state.trrfGlobal != undefined) {
            return (
                <Content style={{ height: 870 }}>
                    <Form style={{ marginBottom: 65 }}>
                        <Item picker regular style={[styles.input, { marginTop: 2 }]}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="SELECIONE O TIPO DO PILAR:"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.type}
                                onValueChange={this.typeValue.bind(this)}>
                                <Picker.Item label="SELECIONE O TIPO DO PILAR:" />
                                <Picker.Item label="Pilar de Borda (Uma Face Exposta ao Fogo)" value="1" />
                                <Picker.Item label="Pilar de Canto e Interno" value="2" />
                            </Picker>
                        </Item>
                        <Item regular style={styles.input}>
                            <Input placeholder="Digite a altura da seção (mm)" keyboardType="numeric" onChangeText={(text) => this.changeHeight(text)} />
                        </Item>
                        <Item regular style={styles.input}>
                            <Input placeholder="Digite a base da seção (mm)" keyboardType="numeric" onChangeText={(text) => this.changeBase(text)} />
                        </Item>
                        <Item regular style={styles.input}>
                            <Input placeholder="Digite a armadura longitudinal (mm)" keyboardType="numeric" onChangeText={(text) => this.changeArmorLong(text)} />
                        </Item>
                        <Item regular style={styles.input}>
                            <Input placeholder="Digite a armadura transversal (mm)" keyboardType="numeric" onChangeText={(text) => this.changeArmorTrans(text)} />
                        </Item>
                        <Item regular style={styles.input}>
                            <Input placeholder="Digite o cobrimento (mm)" keyboardType="numeric" onChangeText={(text) => this.changeCobr(text)} />
                        </Item>
                        {this.state.type === "2" && (
                            <Item regular style={styles.input}>
                                <Input placeholder="Digite o FCK (MPa)" keyboardType="numeric" onChangeText={(text) => this.changeFCK(text)} />
                            </Item>
                        )}
                        {this.state.type === "2" && (
                            <Item regular style={styles.input}>
                                <Input placeholder="Digite o FYK (MPa)" keyboardType="numeric" onChangeText={(text) => this.changeFYK(text)} />
                            </Item>
                        )}
                        {this.state.type === "2" && (
                            <Item regular style={styles.input}>
                                <Input placeholder="Digite o Nsd (KN)" keyboardType="numeric" onChangeText={(text) => this.changeNSD(text)} />
                            </Item>
                        )}
                        {this.state.type === "2" && (
                            <Item regular style={styles.input}>
                                <Input placeholder="Digite a área do concreto (cm²)" keyboardType="numeric" onChangeText={(text) => this.changeArea(text)} />
                            </Item>
                        )}
                        {this.state.type === "2" && (
                            <Item regular style={styles.input}>
                                <Input placeholder="Digite o comprimento efetivo (m)" keyboardType="numeric" onChangeText={(text) => this.changeLe(text)} />
                            </Item>
                        )}
                        {this.state.type === "2" && (
                            <Item regular style={styles.input}>
                                <Input placeholder="Digite o número de barras" keyboardType="numeric" onChangeText={(text) => this.changeNumber(text)} />
                            </Item>
                        )}
                    </Form>
                    <View style={styles.button}>
                        <Button rounded primary disabled={this.verifyButton()} onPress={() => this.pressButton()}>
                            <Icon name='arrow-forward' />
                        </Button>
                    </View>
                </Content>
            )
        }
        else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Por favor, calcule o TRRF Global para depois calcular o TRRF do Pilar.</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 15
    },
    button: {
        position: 'absolute',
        bottom: 5,
        right: 8
    }
});

export default Column;