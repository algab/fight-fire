import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Content, Input, Form, Item, Picker, Icon, Label, Button } from 'native-base';

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
                this.setState({ height: value });
            }        
            if (this.state.height != undefined && this.state.building != undefined && this.state.subBuilding != undefined) {            
                this.trrf();            
            }
        },600);      
    }

    buildingValue(value) {
        this.setState({ building: value });
        if (this.state.height != undefined && this.state.building != undefined && this.state.subBuilding != undefined) {
            this.trrf();            
        }
    }

    subBuildingValue(value) {
        this.setState({ subBuilding: value });
        this.trrf();
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
            "Resultado:", `Classe: ${this.state.trrf.class} TRRF: ${this.state.trrf.minutes} min`,
            [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Continuar',
                    onPress: () => this.props.changePage(1,this.state.trrf)
                }
            ]
        )
    }

    subBuilding() {
        let subBuilding = []
        if (this.state.building == "a") {
            subBuilding.push(<Picker.Item label="Habitações unifamiliares" value="a-1" key={1} />)
            subBuilding.push(<Picker.Item label="Habitações multifamiliares" value="a-2" key={2} />)
            subBuilding.push(<Picker.Item label="Habitações coletivas" value="a-3" key={3} />)
        }
        else if (this.state.building == "b") {
            subBuilding.push(<Picker.Item label="Hotéis e assemelhados" value="b-1" key={1} />)
            subBuilding.push(<Picker.Item label="Hotéis residencias" value="b-2" key={2} />)
        }
        else if (this.state.building == "c") {
            subBuilding.push(<Picker.Item label="Comércio em geral, de pequeno porte" value="c-1" key={1} />)
            subBuilding.push(<Picker.Item label="Comércio de grande e médio porte" value="c-2" key={2} />)
            subBuilding.push(<Picker.Item label="Centros comerciais" value="c-3" key={3} />)
        }
        else if (this.state.building == "d") {
            subBuilding.push(<Picker.Item label="Locais para prestação de serviços" value="d-1" key={1} />)
            subBuilding.push(<Picker.Item label="Agências bancarias" value="d-2" key={2} />)
            subBuilding.push(<Picker.Item label="Serviços de reparação" value="d-3" key={3} />)
        }
        else if (this.state.building == "e") {
            subBuilding.push(<Picker.Item label="Escolas em geral" value="d-1" key={1} />)
            subBuilding.push(<Picker.Item label="Escolas especiais" value="d-2" key={2} />)
            subBuilding.push(<Picker.Item label="Espaço para cultura física" value="d-3" key={3} />)
            subBuilding.push(<Picker.Item label="Centros de treinamento profissional" value="d-4" key={4} />)
            subBuilding.push(<Picker.Item label="Pré-escolas" value="d-5" key={5} />)
            subBuilding.push(<Picker.Item label="Escolas para portadores de deficiências" value="d-6" key={6} />)
        }
        else if (this.state.building == "f") {
            subBuilding.push(<Picker.Item label="Locais onde há objetos de valor inestimável" value="f-1" key={1} />)
            subBuilding.push(<Picker.Item label="Tempos e auditórios" value="f-2" key={2} />)
            subBuilding.push(<Picker.Item label="Centros esportivos" value="f-3" key={3} />)
            subBuilding.push(<Picker.Item label="Estações e terminais de passageiros" value="f-4" key={4} />)
            subBuilding.push(<Picker.Item label="Locais de artes cênicas" value="f-5" key={5} />)
            subBuilding.push(<Picker.Item label="Clubes sociais" value="f-6" key={6} />)
            subBuilding.push(<Picker.Item label="Construções provisórias" value="f-7" key={7} />)
            subBuilding.push(<Picker.Item label="Locais para refeições" value="f-8" key={8} />)
        }
        else if (this.state.building == "g") {
            subBuilding.push(<Picker.Item label="Garagens sem público e abastecimento (aberto)" value="g-1-1" key={1} />)
            subBuilding.push(<Picker.Item label="Garagens sem público e abastecimento (fechado)" value="g-1-2" key={2} />)
            subBuilding.push(<Picker.Item label="Garagens com público e sem abastecimento(aberto) " value="g-2-1" key={3} />)
            subBuilding.push(<Picker.Item label="Garagens com público e sem abastecimento(fechado)" value="g-2-2" key={4} />)
            subBuilding.push(<Picker.Item label="Locais de abastecimento de combustível" value="g-3" key={5} />)
            subBuilding.push(<Picker.Item label="Serviços de conservação, manutenção e reparos" value="g-4" key={6} />)
            subBuilding.push(<Picker.Item label="Serviços em veículos de grande porte" value="g-5" key={7} />)
        }
        else if (this.state.building == "h") {
            subBuilding.push(<Picker.Item label="Hospitais veterinários e assemelhados" value="h-1" key={1} />)
            subBuilding.push(<Picker.Item label="Locais com pessoas de cuidados especiais" value="h-2" key={2} />)
            subBuilding.push(<Picker.Item label="Hospitais e assemelhados" value="h-3" key={3} />)
            subBuilding.push(<Picker.Item label="Prédios vinculados às forças armadas e policias" value="h-4" key={4} />)
            subBuilding.push(<Picker.Item label="Locais onde a liberdade das pessoas sofre restrições" value="h-5" key={5} />)
        }
        else if (this.state.building == "i") {
            subBuilding.push(<Picker.Item label="Locais com médio risco de incêndio" value="i-1" key={1} />)
            subBuilding.push(<Picker.Item label="Locais com grande risco de incêndio" value="i-2" key={2} />)
        }
        else if (this.state.building === "j") {
            subBuilding.push(<Picker.Item label="Depósitos de baixo risco de incêndio" value="j-1" key={1} />)
            subBuilding.push(<Picker.Item label="Depósitos de médio e alto risco de incêndio" value="j-2" key={2} />)
        }
        return subBuilding;
    }

    trrf() {
        const height = parseFloat(this.state.height);
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
            <Content>
                <Form>
                    <Item regular style={[styles.input, styles.height]}>
                        <Input placeholder="Digite a altura da edificação (m)" keyboardType="numeric" onChangeText={(text) => this.heightValue(text)} />
                    </Item>
                    <Item picker style={styles.input}>
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
                            <Picker.Item label="Residencial" value="a" />
                            <Picker.Item label="Serviços de hospedagem" value="b" />
                            <Picker.Item label="Comercial Varejista" value="c" />
                            <Picker.Item label="Serviços profissionais,pessoais e técnicos" value="d" />
                            <Picker.Item label="Educacional e cultura fisica" value="e" />
                            <Picker.Item label="Locais de reunião pública" value="f" />
                            <Picker.Item label="Serviços automotivos" value="g" />
                            <Picker.Item label="Serviços de saúde e institucionais" value="h" />
                            <Picker.Item label="Industrial e Atacadista" value="i" />
                            <Picker.Item label="Depósitos" value="j" />
                        </Picker>
                    </Item>
                    <Item picker style={[styles.input,{marginBottom:202}]}>
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

export default Global;