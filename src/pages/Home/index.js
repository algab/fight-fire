import React, { useEffect, useState } from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Container, Input, Item, Picker, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import Header from '../../components/Header';

import { calc } from '../../utils/calc';

import { styles } from './styles';

const trrf = require("../../data/trrf.json");

export default function Home({ navigation }) {
    const [ready, setReady] = useState(false);
    const [height, setHeight] = useState(null);
    const [building, setBuilding] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        loadFonts();
    }, []);

    const loadFonts = async () => {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        setReady(true);
    };

    const handleHeight = (value) => {
        if (value === '') {
            setHeight(null);
        } else {
            setHeight(parseFloat(value));
        }
    };

    const handleBuilding = (item) => {
        setBuilding(item);
    };

    const handleCategory = (category) => {
        setCategory(category);
    };

    const itemBuilding = () => {
        return trrf.map((data, index) => (
            <Picker.Item label={data.name} value={data.id} key={index} />
        ));
    };

    const itemCategory = () => {
        if (building !== null) {
            const categories = trrf.filter(data => data.id === building)[0];
            return categories.categories.map((data, index) => (
                <Picker.Item label={data.name} value={data.id} key={index} />
            ));
        }
        return [];
    };

    const calcTRRF = () => {
        if (height === null || building === null || category === null) {
            Alert.alert('Aviso', 'Preencha todos os campos.', [{ text: 'OK' }]);
        } else {
            const result = calc(height, building, category);
            Alert.alert(
                "Resultado", `Classe: ${result.class}\nTRRF: ${result.minutes} min`,
                [
                    { text: 'Cancelar' },
                    {
                        text: 'Continuar',
                        onPress: () => navigation.navigate('Structures', { trrf: result })
                    }
                ]
            )
        }
    };

    if (!ready) {
        return <AppLoading />;
    } else {
        return (
            <Container>
                <Header />
                <View style={styles.container}>
                    <View style={styles.input}>
                        <Text style={styles.label}>Altura</Text>
                        <Item regular>
                            <Input
                                placeholder="Digite a altura da edificação (m)"
                                keyboardType="numeric"
                                onChangeText={handleHeight}
                            />
                        </Item>
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.label}>Edificação</Text>
                        <Item picker regular>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                selectedValue={building}
                                onValueChange={handleBuilding}
                            >
                                <Picker.Item label="Selecione uma edificação" value={null} />
                                {itemBuilding()}
                            </Picker>
                        </Item>
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.label}>Categoria da Edificação</Text>
                        <Item picker regular>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                selectedValue={category}
                                onValueChange={handleCategory}
                            >
                                <Picker.Item label="Selecione a categoria da edificação" value={null} />
                                {itemCategory()}
                            </Picker>
                        </Item>
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity style={styles.button} onPress={calcTRRF}>
                            <Icon name='arrow-forward' style={styles.iconButton} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}
