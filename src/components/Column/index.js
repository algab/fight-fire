import React, { useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Input, Item, Picker, Icon } from 'native-base';

import { styles } from './styles';

import { columnEdge, columnCorner } from '../../utils/column';

export default function Slab({ trrf }) {
    const [attributes, setAttributes] = useState({
        typeColumn: null,
        height: null,
        base: null,
        armorLongitudinal: null,
        armorTransversal: null,
        cover: null,
        nsd: null,
        le: null,
        bars: null
    });

    const handleAttributes = (type, value) => {
        if (value === '') {
            setAttributes({ ...attributes, [type]: null });
        } else {
            setAttributes({ ...attributes, [type]: parseFloat(value) });
        }
    };

    const calc = () => {
        const { height, base, armorLongitudinal, armorTransversal, cover, nsd, le, bars } = attributes;
        if (attributes.typeColumn === 1) {
            if (height === null || base === null || armorLongitudinal === null ||
                armorTransversal === null || cover === null) {
                Alert.alert('Aviso', 'Preencha todos os campos.');
            } else {
                if (base < 155) {
                    Alert.alert('Atenção','Base da seção não pode ser menor que 155 mm.');
                } else {
                    alert(columnEdge(armorLongitudinal, armorTransversal, base, cover));
                }
            }
        } else {
            if (height === null || base === null || armorLongitudinal === null ||
                armorTransversal === null || cover === null || nsd == null ||
                le === null || bars === null) {
                Alert.alert('Aviso', 'Preencha todos os campos.');
            } else {
                alert(columnCorner(armorLongitudinal, armorTransversal, base, bars, cover, height, nsd, le));
            }
        }
    };

    const alert = (column) => {
        if (column >= parseFloat(trrf.minutes)) {
            Alert.alert(
                'Resultado', `TRRF Global: ${trrf.minutes} min\nTRRF Pilar: ${column} min\nCondição atendida com sucesso.`,
                [{ text: 'OK' }]
            );
        } else {
            Alert.alert(
                'Resultado', `TRRF Global: ${trrf.minutes} min\nTRRF Pilar: ${column} min\nCondição não atendida, redimensione a estrutura.`,
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.input}>
                <Text style={styles.label}>Tipo do Pilar</Text>
                <Item picker regular>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        selectedValue={attributes.typeColumn}
                        onValueChange={(value) => handleAttributes('typeColumn', value)}
                    >
                        <Picker.Item label="Selecione o tipo do pilar" value={null} />
                        <Picker.Item label="Uma face exposta ao fogo" value={1} />
                        <Picker.Item label="Duas ou mais faces expostas ao fogo" value={2} />
                    </Picker>
                </Item>
            </View>
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
            {
                attributes.typeColumn === 2 && (
                    <>
                        <View style={styles.input}>
                            <Text style={styles.label}>Nsd</Text>
                            <Item regular>
                                <Input
                                    placeholder="Digite o Nsd (KN)"
                                    keyboardType="numeric"
                                    onChangeText={(value) => handleAttributes('nsd', value)}
                                />
                            </Item>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.label}>Comprimento</Text>
                            <Item regular>
                                <Input
                                    placeholder="Digite o comprimento efetivo (m)"
                                    keyboardType="numeric"
                                    onChangeText={(value) => handleAttributes('le', value)}
                                />
                            </Item>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.label}>Número de Barras</Text>
                            <Item regular>
                                <Input
                                    placeholder="Digite o número de barras"
                                    keyboardType="numeric"
                                    onChangeText={(value) => handleAttributes('bars', value)}
                                />
                            </Item>
                        </View>
                    </>
                )
            }
            <TouchableOpacity style={styles.button} onPress={calc}>
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};
