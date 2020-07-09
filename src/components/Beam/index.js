import React, { useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Input, Item } from 'native-base';

import { styles } from './styles';

import { calcBeam } from '../../utils/beam';

export default function Beam({ trrf }) {
    const [attributes, setAttributes] = useState({
        height: null,
        base: null,
        armorLongitudinal: null,
        armorTransversal: null,
        cover: null
    });

    const handleAttributes = (type, value) => {
        if (value === '') {
            setAttributes({ ...attributes, [type]: null });
        } else {
            setAttributes({ ...attributes, [type]: parseFloat(value) });
        }
    };

    const calc = () => {
        const { height, base, armorLongitudinal, armorTransversal, cover } = attributes;
        if (height === null || base === null || armorLongitudinal === null || armorTransversal === null || cover === null) {
            Alert.alert('Aviso', 'Preencha todos os campos.');
        } else {
            if (base < 80) {
                Alert.alert('Atenção','Base da seção não pode ser menor que 80 mm.');
            } else {
                alert(calcBeam(armorLongitudinal, armorTransversal, cover, base));                
            }
        }
    };

    const alert = (beam) => {
        if (beam >= parseFloat(trrf.minutes)) {
            Alert.alert(
                'Resultado', `TRRF Global: ${trrf.minutes} min\nTRRF Viga: ${beam} min\nCondição atendida com sucesso.`,
                [{ text: 'OK' }]
            );
        } else {
            Alert.alert(
                'Resultado', `TRRF Global: ${trrf.minutes} min\nTRRF Viga: ${beam} min\nCondição não atendida, redimensione a estrutura.`,
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.input}>
                <Text style={styles.label}>Altura</Text>
                <Item regular>
                    <Input
                        placeholder="Digite a altura da seção (mm)"
                        keyboardType="numeric"
                        onChangeText={(value) => handleAttributes('height', value)}
                    />
                </Item>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Base</Text>
                <Item regular>
                    <Input
                        placeholder="Digite a base da seção (mm)"
                        keyboardType="numeric"
                        onChangeText={(value) => handleAttributes('base', value)}
                    />
                </Item>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Armadura Longitudinal</Text>
                <Item regular>
                    <Input
                        placeholder="Digite a armadura longitudinal (mm)"
                        keyboardType="numeric"
                        onChangeText={(value) => handleAttributes('armorLongitudinal', value)}
                    />
                </Item>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Armadura Transversal</Text>
                <Item regular>
                    <Input
                        placeholder="Digite a armadura transversal (mm)"
                        keyboardType="numeric"
                        onChangeText={(value) => handleAttributes('armorTransversal', value)}
                    />
                </Item>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Cobrimento</Text>
                <Item regular>
                    <Input
                        placeholder="Digite o cobrimento (mm)"
                        keyboardType="numeric"
                        onChangeText={(value) => handleAttributes('cover', value)}
                    />
                </Item>
            </View>
            <TouchableOpacity style={styles.button} onPress={calc}>
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};
