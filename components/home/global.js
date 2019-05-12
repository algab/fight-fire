import React from "react";
import { StyleSheet } from "react-native";
import { Content, Input, Form, Item, Picker, Icon, Label } from 'native-base';

class Global extends React.Component {
    constructor(props) {
        super(props);
        this.state = { height: undefined, building: undefined, subBuilding: undefined };
    }

    buildingValue(value) {
        this.setState({ building: value });
    }

    subBuildingValue(value) {
        this.setState({ subBuilding: value });
    }

    subBuilding() {
        let subBuilding = []
        if (this.state.building == "a") {
            subBuilding.push(<Picker.Item label="Habitações unifamiliares" value="a-1" key={1} />)
            subBuilding.push(<Picker.Item label="Habitações multifamiliares" value="a-2" key={2} />)
            subBuilding.push(<Picker.Item label="Habitações coletivas" value="a-3" key={3} />)
        }
        else if (this.state.building == "b") {
            subBuilding.push(<Picker.Item label="Hotéis e assemelhados" value="b-1" key="1" />)
            subBuilding.push(<Picker.Item label="Hotéis residencias" value="b-2" key="2" />)
        }
        else if (this.state.building == "c") {
            subBuilding.push(<Picker.Item label="Comércio em geral, de pequeno porte" value="c-1" key="1" />)
            subBuilding.push(<Picker.Item label="Comércio de grande e médio porte" value="c-2" key="2" />)
            subBuilding.push(<Picker.Item label="Centros comerciais" value="c-3" key="3" />)
        }
        else if (this.state.building == "d") {
            subBuilding.push(<Picker.Item label="Locais para prestação de serviços" value="d-1" key="1" />)
            subBuilding.push(<Picker.Item label="Agências bancarias" value="d-2" key="2" />)
            subBuilding.push(<Picker.Item label="Serviços de reparação" value="d-3" key="3" />)
        }
        else if (this.state.building == "e") {
            subBuilding.push(<Picker.Item label="Escolas em geral" value="d-1" key="1" />)
            subBuilding.push(<Picker.Item label="Escolas especiais" value="d-2" key="2" />)
            subBuilding.push(<Picker.Item label="Espaço para cultura física" value="d-3" key="3" />)
            subBuilding.push(<Picker.Item label="Centros de treinamento profissional" value="d-4" key="4" />)
            subBuilding.push(<Picker.Item label="Pré-escolas" value="d-5" key="5" />)
            subBuilding.push(<Picker.Item label="Escolas para portadores de deficiências" value="d-6" key="6" />)
        }
        else if (this.state.building == "f") {
            subBuilding.push(<Picker.Item label="Locais onde há objetos de valor inestimável" value="f-1" key="1" />)
            subBuilding.push(<Picker.Item label="Tempos e auditórios" value="f-2" key="2" />)
            subBuilding.push(<Picker.Item label="Centros esportivos" value="f-3" key="3" />)
            subBuilding.push(<Picker.Item label="Estações e terminais de passageiros" value="f-4" key="4" />)
            subBuilding.push(<Picker.Item label="Locais de produção e apresentação de artes cênicas" value="f-5" key="5" />)
            subBuilding.push(<Picker.Item label="Clubes sociais" value="f-6" key="6" />)
            subBuilding.push(<Picker.Item label="Construções provisórias" value="f-7" key="7" />)
            subBuilding.push(<Picker.Item label="Locais para refeições" value="f-8" key="8" />)
        }
        else if (this.state.building == "g") {
            subBuilding.push(<Picker.Item label="Garagens sem acesso de público, sem abastecimento e abertos lateralmente" value="g-1-1" />)
            subBuilding.push(<Picker.Item label="Garagens sem acesso de público, sem abastecimento e não abertos lateralmente" value="g-1-2" />)
            subBuilding.push(<Picker.Item label="Garagens com acesso de público, sem abastecimento e abertos lateralmente" value="g-2-1" />)
            subBuilding.push(<Picker.Item label="Garagens com acesso de público, sem abastecimento e não abertos lateralmente" value="g-2-2" />)
            subBuilding.push(<Picker.Item label="Locais dotados de abastecimento de combustível" value="g-3" />)
            subBuilding.push(<Picker.Item label="Serviços de conservação, manutenção e reparos" value="g-4" />)
            subBuilding.push(<Picker.Item label="Serviços de manutenção em veículos de grande porte e retificadoras em geral" value="g-5" />)
        }
        else if (this.state.building == "h") {
            subBuilding.push(<Picker.Item label="Hospitais veterinários e assemelhados" value="h-1" />)
            subBuilding.push(<Picker.Item label="Locais onde pessoas requerem cuidados especiais por limitações fisicas ou mentais" value="h-2" />)
            subBuilding.push(<Picker.Item label="Hospitais e assemelhados" value="h-3" />)
            subBuilding.push(<Picker.Item label="Prédios e instalações vinculados às forças armadas, policias civil e militar" value="h-4" />)
            subBuilding.push(<Picker.Item label="Locais onde a liberdade das pessoas sofre restrições" value="h-5" />)
        }
        else if (this.state.building == "i") {
            subBuilding.push(<Picker.Item label="Locais onde as atividades exercidas e os materiais utilizados apresentam médio ou potencial risco de incêndio" value="i-1" />)
            subBuilding.push(<Picker.Item label="Locais onde as atividades exercidas e os materiais utilizados apresentam grande potencial risco de incêndio" value="i-2" />)
        }
        else if (this.state.building === "j") {
            subBuilding.push(<Picker.Item label="Depósitos de baixo risco de incêndio" value="j-1" />)
            subBuilding.push(<Picker.Item label="Depósitos de médio e alto risco de incêndio" value="j-2" />)
        }
        return subBuilding;
    }

    render() {
        return (
            <Content>
                <Form>
                    <Item floatingLabel style={styles.input}>
                        <Label>Digite a altura da edificação (m)</Label>
                        <Input keyboardType="numeric" onChangeText={(text) => this.setState({ height: text })} />
                    </Item>
                    <Item picker style={styles.input}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Selecione uma edificação"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.building}
                            onValueChange={this.buildingValue.bind(this)}
                        >
                            <Picker.Item label="Selecione uma edificação" />
                            <Picker.Item label="Residencial" value="a" />
                            <Picker.Item label="Serviços de hospedagem" value="b" />
                            <Picker.Item label="Comercial Varejista" value="c" />
                            <Picker.Item label="Serviços profissionais,pessoais e técnicos" value="d" />
                            <Picker.Item label="Educacional e cultura fisica" value="e" />
                            <Picker.Item label="Locais de reunião pública" value="f" />
                            <Picker.Item label="Serviços automotivos" value="g" />
                            <Picker.Item label="Serviços de saúde e institucionais" value="h" />
                            <Picker.Item label="Industrial, comercial de média e alto risco e atacadista" value="i" />
                            <Picker.Item label="Depósitos" value="j" />
                        </Picker>
                    </Item>
                    <Item picker style={styles.input}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Selecione o subgrupo da edificação"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.subBuilding}
                            onValueChange={this.subBuildingValue.bind(this)}
                        >
                            <Picker.Item label="Selecione o subgrupo da edificação" />
                            {this.subBuilding()}
                        </Picker>
                    </Item>
                </Form>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        paddingTop: 5,
        paddingBottom: 5
    }
})

export default Global;