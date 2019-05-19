import React from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { Content, Input, Form, Item, Icon, Button } from 'native-base';

class Beam extends React.Component {
    constructor(props) {
        super(props);       
        this.state = { trrfGlobal: props.trrf, height: undefined, base: undefined, armorLong: undefined, armorTrans: undefined, cobr: undefined  }
    }

    componentWillReceiveProps(nextProps) {               
        this.setState({ trrfGlobal: nextProps.trrf });
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
            else if (parseFloat(value) < 80) {
                Alert.alert("Atenção","Base da seção não pode ser menor que 80 mm");
                this.setState({ base: undefined });
            }
            else {
                this.setState({ base: parseFloat(value) });
            }
        }, 900);
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
        }, 900);
    }

    verifyButton() {
        if (this.state.height != undefined && this.state.base != undefined && this.state.armorLong != undefined && this.state.armorTrans != undefined && this.state.cobr != undefined) {
            return false;
        }
        else {
            return true;
        }
    }

    pressButton() {
        let trrf = this.calcBeam();
        if (trrf >= parseFloat(this.state.trrfGlobal.minutes)) {
            Alert.alert(
                "TRRF Viga", `TRRF Global: ${this.state.trrfGlobal.minutes} min\nTRRF Viga: ${trrf} min\nCondição atendida com sucesso.`,
                [
                    {
                        text: 'Cancelar'
                    },
                    {
                        text: 'Continuar',
                        onPress: () => this.props.changePage(3, this.state.trrfGlobal)
                    }
                ]
            )            
        }
        else {
            Alert.alert(
                "TRRF Viga", `TRRF Global: ${this.state.trrfGlobal.minutes} min\nTRRF Viga: ${trrf} min\nCondição não atendida, redimensione a estrutura.`,
                [
                    {
                        text: 'Cancelar'
                    }
                ]
            ) 
        }
    }
    
    calcBeam() {
        const area = ((this.state.armorLong * this.state.armorTrans) * 3.14159)/4
        const c1h = ((this.state.cobr + this.state.armorTrans + (this.state.armorLong/2)) * area) / area
        const c1v = c1h

        let c1 = 0

        let trrf1 = 180
        let trrf2 = 180
        let trrf3 = 180
        let trrf4 = 180

        let trrfB1 = 180
        let trrfB2 = 180
        let trrfB3 = 180
        let trrfB4 = 180

        let trrfC1 = 180
        let trrfC2 = 180
        let trrfC3 = 180
        let trrfC4 = 180

        if (c1h <= c1v) {
            c1 = c1h;
        }
        else {
            c1 = c1v;
        }

        // Inicio dos cálculos da tabela 1
        
        if (this.state.base >= 80 && this.state.base < 120) {
            trrfB1 = 30;
        }
        else if (this.state.base >= 120 && this.state.base < 140) {
            trrfB1 = 60;
        }
        else if (this.state.base >= 140 && this.state.base < 190) {
            trrfB1 = 90;
        }
        else if (this.state.base >= 190 && this.state.base < 240) {
            trrfB1 = 120;
        }
        else if (this.state.base >= 240) {
            trrfB1 = 180;
        }

        if (c1 >= 15 && c1 < 25) {
            trrfC1 = 30;
        }
        else if (c1 >= 25 && c1 < 37) {
            trrfC1 = 60;
        }
        else if (c1 >= 37 && c1 < 45) {
            trrfC1 = 90;
        }
        else if (c1 >= 45 && c1 < 60) {
            trrfC1 = 120;
        }
        else if (c1 >= 60) {
            trrfC1 = 180;
        }

        if (trrfB1 <= trrfC1) {
            trrf1 = trrfB1;
        }
        else {
            trrf1 = trrfC1;
        }

        // Inicio dos cálculos da tabela 2

        if (this.state.base >= 160 && this.state.base < 190) {
            trrfB2 = 30;
        }
        else if (this.state.base >= 190 && this.state.base < 250) {
            trrfB2 = 60;
        }
        else if (this.state.base >= 250 && this.state.base < 300) {
            trrfB2 = 90;
        }
        else if (this.state.base >= 300 && this.state.base < 400) {
            trrfB2 = 120;
        }
        else if (this.state.base >= 400) {
            trrfB2 = 180;
        }

        if (c1 >= 12 && c1 < 25) {
            trrfC2 = 60;
        }
        else if (c1 >= 25 && c1 < 35) {
            trrfC2 = 90;
        }
        else if (c1 >= 35 && c1 < 50) {
            trrfC2 = 120;
        }
        else if (c1 >= 50) {
            trrfC2 = 180;
        }

        if (trrfB2 <= trrfC2) {
            trrf2 = trrfB2;
        }
        else {
            trrf2 = trrfC2;
        }

        // Inicio dos cálculos da tabela 3
        
        if (this.state.base >= 450 && this.state.base < 550) {
            trrfB3 = 120;
        }
        else if (this.state.base >= 550) {
            trrfB3 = 180;
        }

        if (c1 >= 35 && c1 < 50) {
            trrfC3 = 120;
        }
        else if (c1 >= 50) {
            trrfC3 = 180;
        }

        if (trrfB3 <= trrfC3) {
            trrf3 = trrfB3;
        }
        else {
            trrf3 = trrfC3;
        }

        // Inicio dos cálculos da tabela 4
        
        if (this.state.base >= 500 && this.state.base < 600) {
            trrfB4 = 120;
        }
        else if (this.state.base >= 600) {
            trrfB4 = 180;
        }

        if (c1 >= 30 && c1 < 40) {
            trrfC4 = 120;
        }
        else if (c1 >= 40) {
            trrfC4 = 180;
        }

        if (trrfB4 <= trrfC4) {
            trrf4 = trrfB4;
        }
        else {
            trrf4 = trrfC4;
        }

        // Comparação entre as tabelas

        if (trrf1 == 180 && trrf2 == 180 && trrf3 == 180 && trrf4 == 180) {
            return 0;
        }
        else if (trrf1 <= trrf2 && trrf1 <= trrf3 && trrf1 <= trrf4) {
            return trrf1;
        }
        else if (trrf2 <= trrf1 && trrf2 <= trrf3 && trrf2 <= trrf4) {
            return trrf2;
        }  
        else if (trrf3 <= trrf1 && trrf3 <= trrf2 && trrf3 <= trrf4) {
            return trrf3;
        }
        else if (trrf4 <= trrf1 && trrf4 <= trrf2 && trrf4 <= trrf3) {
            return trrf4;
        }                  
    }

    render() {
        if (this.state.trrfGlobal != undefined) {
            return (
                <Content style={{ height: 400 }}>
                    <Form style={{ marginBottom: 65 }}>
                        <Item regular style={[styles.input, { marginTop: 2 }]}>
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
                    <Text style={{textAlign:'center'}}>Por favor, calcule o TRRF Global para depois calcular o TRRF da Viga.</Text>
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

export default Beam;