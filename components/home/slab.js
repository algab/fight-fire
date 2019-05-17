import React from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { Content, Input, Form, Item, Picker, Icon, Button, Toast } from 'native-base';

class Slab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { trrfGlobal: props.trrf, type: undefined, armor: undefined, height: undefined, cobr: undefined, width: undefined, depth: undefined }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ trrfGlobal: nextProps.trrf });
    }

    typeValue(value) {
        this.setState({ type: value });
    }

    changeArmor(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ armor: undefined });
            }
            else {
                this.setState({ armor: parseFloat(value) });
            }
        }, 600);
    }

    changeHeight(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ height: undefined });
            }
            else if (parseFloat(value) < 60) {
                Alert.alert("Atenção", "Altura não pode ser menor que 60 mm.");
                this.setState({ height: undefined });
            }
            else {
                this.setState({ height: parseFloat(value) });
            }
        }, 800);
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

    changeWidth(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ width: undefined });
            }
            else if (parseFloat(value) < 80) {
                Alert.alert("Atenção", "Largura não pode ser menor que 80 mm.");
                this.setState({ width: undefined });
            }
            else {
                this.setState({ width: parseFloat(value) });
            }
        }, 600);
    }

    changeDepth(value) {
        setTimeout(() => {
            if (value == "") {
                this.setState({ depth: undefined });
            }
            else if (parseFloat(value) < 10) {
                Alert.alert("Atenção", "Espessura não pode ser menor que 10 mm.");
                this.setState({ depth: undefined });
            }
            else {
                this.setState({ depth: parseFloat(value) });
            }
        }, 600);
    }

    verifyButton() {
        if (this.state.type === "1") {
            if (this.state.armor != undefined && this.state.height != undefined && this.state.cobr != undefined) {
                return false;
            }
            else {
                return true;
            }
        }
        else if (this.state.type === "2") {
            if (this.state.armor != undefined && this.state.height != undefined && this.state.cobr != undefined && this.state.depth != undefined && this.state.width != undefined) {
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
            trrf = this.slabMacica();
        }
        else if (this.state.type === "2") {
            let depth = this.slabDepth();
            let width = this.slabWidth();
            if (depth <= width) {
                trrf = depth;
            }
            else {
                trrf = width;
            }
        }
        if (trrf >= parseFloat(this.state.trrfGlobal.minutes)) {
            Alert.alert(
                "TRRF Laje", `TRRF Global: ${this.state.trrfGlobal.minutes} min\nTRRF Laje: ${trrf} min\nCondição atendida com sucesso.`,
                [
                    {
                        text: 'Cancelar'
                    },
                    {
                        text: 'Continuar',
                        onPress: () => this.props.changePage(2, this.state.trrfGlobal)
                    }
                ]
            )
        }
        else {
            Alert.alert(
                "TRRF Laje", `TRRF Global: ${this.state.trrfGlobal.minutes} min\nTRRF Laje: ${trrf} min\nCondição não atendida, redimensione a estrutura.`,
                [
                    {
                        text: 'Cancelar'
                    }
                ]
            )
        }
    }

    slabMacica() {
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

    slabDepth() {
        const c1 = this.state.depth;
        const height = this.state.height;

        let trrfHeight = null;
        let trrfC1 = null;

        if (height >= 60 && height < 80) {
            trrfHeight = 30;
        }
        else if (height >= 80 && height < 100) {
            trrfHeight = 60;
        }
        else if (height >= 100 && height < 120) {
            trrfHeight = 90;
        }
        else if (height >= 120 && height < 150) {
            trrfHeight = 120;
        }
        else if (height >= 150) {
            trrfHeight = 180;
        }

        if (c1 >= 10 && c1 < 20) {
            trrfC1 = 30;
        }
        else if (c1 >= 20 && c1 < 30) {
            trrfC1 = 60;
        }
        else if (c1 >= 30 && c1 < 40) {
            trrfC1 = 90;
        }
        else if (c1 >= 40 && c1 < 55) {
            trrfC1 = 120;
        }
        else if (c1 >= 55) {
            trrfC1 = 180;
        }

        if (trrfC1 <= trrfHeight) {
            return trrfC1;
        }
        else {
            return trrfHeight;
        }
    }

    slabWidth() {
        const c1 = this.state.cobr + (this.state.armor / 2);
        const b = this.state.width;

        let trrfT1 = 180;
        let trrfT2 = 180;

        let b1 = null;
        let b2 = null;

        let c11 = null;
        let c12 = null;

        // Inicio dos cálculos da tabela 1

        if (b >= 80 && b <= 100) {
            b1 = 30;
        }
        else if (b > 100 && b <= 130) {
            b1 = 60;
        }
        else if (b >= 130 && b < 160) {
            b1 = 90;
        }
        else if (b >= 160 && b < 220) {
            b1 = 120;
        }
        else if (b >= 220) {
            b1 = 180;
        }

        if (c1 >= 25 && c1 < 45) {
            c11 = 30;
        }
        else if (c1 >= 45 && c1 < 60) {
            c11 = 60;
        }
        else if (c1 >= 60 && c1 < 65) {
            c11 = 90;
        }
        else if (c1 >= 65 && c1 < 80) {
            c11 = 120;
        }
        else if (c1 >= 80) {
            c11 = 180;
        }

        if (b1 <= c11) {
            trrfT1 = b1;
        }
        else {
            trrfT1 = c11;
        }

        // Inicio dos cálculos da tabela 2

        if (b >= 100 && b <= 120) {
            b2 = 30;
        }
        else if (b > 120 && b <= 150) {
            b2 = 60;
        }
        else if (b > 150 && b < 220) {
            b2 = 90;
        }
        else if (b >= 220) {
            b2 = 120;
        }

        if (c1 >= 20 && c1 < 40) {
            c12 = 30;
        }
        else if (c1 >= 40 && c1 < 50) {
            c12 = 60;
        }
        else if (c1 >= 50) {
            c12 = 90;
        }

        if (b2 <= c12) {
            trrfT2 = b2;
        }
        else {
            trrfT2 = c12;
        }

        // Comparação entre as tabelas

        if (trrfT1 == 0 && trrfT2 == 0) {
            return 180;
        }
        else if (trrfT1 == 0) {
            return trrfT2;
        }
        else if (trrfT2 == 0) {
            return trrfT1;
        }
        else if (trrfT1 <= trrfT2) {
            return trrfT1;
        }
        else {
            return trrfT2;
        }
    }

    render() {
        if (this.state.trrfGlobal != undefined) {
            return (
                <Content style={{ height: 470 }}>
                    <Form style={{ marginBottom: 65 }}>
                        <Item picker regular style={[styles.input, { marginTop: 2 }]}>
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
                        <Item regular style={styles.input}>
                            <Input placeholder="Digite o cobrimento (mm)" keyboardType="numeric" onChangeText={(text) => this.changeCobr(text)} />
                        </Item>
                        {this.state.type === "2" && (
                            <Item regular style={styles.input}>
                                <Input placeholder="Digite a largura da nervura da laje (mm)" keyboardType="numeric" onChangeText={(text) => this.changeWidth(text)} />
                            </Item>
                        )}
                        {this.state.type === "2" && (
                            <Item regular style={styles.input}>
                                <Input placeholder="Digite a espessura da capa (mm)" keyboardType="numeric" onChangeText={(text) => this.changeDepth(text)} />
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
                    <Text style={{ textAlign: 'center' }}>Por favor, calcule o TRRF Global para depois calcular o TRRF da Laje.</Text>
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

export default Slab;