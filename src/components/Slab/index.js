import React, { useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Input, Item, Picker, Icon } from 'native-base';

import { styles } from './styles';

import { calcSlab, slabDepth, slabWidth } from '../../utils/slab';

export default function Slab({ trrf }) {
    const [attributes, setAttributes] = useState({
        typeSlab: null,
        armor: null,
        height: null,
        cover: null,
        width: null,
        depth: null
    });

    const handleAttributes = (type, value) => {
        if (value === '') {
            setAttributes({ ...attributes, [type]: null });
        } else {
            setAttributes({ ...attributes, [type]: parseFloat(value) });
        }
    };

    const calc = () => {
        const { typeSlab, armor, height, cover, width, depth } = attributes;
        if (typeSlab === 1) {
            if (armor === null || height === null || cover === null) {
                Alert.alert('Aviso', 'Preencha todos os campos.');
            } else {
                alert(calcSlab(cover, armor, height));
            }
        } else {
            if (armor === null || height === null || cover === null || width === null || depth === null) {
                Alert.alert('Aviso', 'Preencha todos os campos.');
            } else {
                const trrfDepth = slabDepth(depth, height);
                const trrfWidth = slabWidth(cover, armor, width);
                if (trrfDepth <= trrfWidth) {
                    alert(trrfDepth);
                } else {
                    alert(trrfWidth);
                }
            }
        }
    };

    const alert = (slab) => {
        if (slab >= parseFloat(trrf.minutes)) {
            Alert.alert(
                'Resultado', `TRRF Global: ${trrf.minutes} min\nTRRF Laje: ${slab} min\nCondição atendida com sucesso.`,
                [{ text: 'OK' }]
            );
        } else {
            Alert.alert(
                'Resultado', `TRRF Global: ${trrf.minutes} min\nTRRF Laje: ${slab} min\nCondição não atendida, redimensione a estrutura.`,
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.input}>
                <Text style={styles.label}>Tipo da Laje</Text>
                <Item picker regular>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        selectedValue={attributes.typeSlab}
                        onValueChange={(value) => handleAttributes('typeSlab', value)}
                    >
                        <Picker.Item label="Selecione o tipo da laje" value={null} />
                        <Picker.Item label="Laje Maciça" value={1} />
                        <Picker.Item label="Laje Nervurada Treliçada" value={2} />
                    </Picker>
                </Item>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Armadura Longitudinal</Text>
                <Item regular>
                    <Input
                        placeholder="Digite a armadura longitudinal (mm)"
                        keyboardType="numeric"
                        onChangeText={(value) => handleAttributes('armor', value)}
                    />
                </Item>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Altura</Text>
                <Item regular>
                    <Input
                        placeholder="Digite a altura da laje (mm)"
                        keyboardType="numeric"
                        onChangeText={(value) => handleAttributes('height', value)}
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
                attributes.typeSlab === 2 && (
                    <>
                        <View style={styles.input}>
                            <Text style={styles.label}>Largura</Text>
                            <Item regular>
                                <Input
                                    placeholder="Digite a largura da nervura da laje (mm)"
                                    keyboardType="numeric"
                                    onChangeText={(value) => handleAttributes('width', value)}
                                />
                            </Item>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.label}>Espessura</Text>
                            <Item regular>
                                <Input
                                    placeholder="Digite a espessura da capa (mm)"
                                    keyboardType="numeric"
                                    onChangeText={(value) => handleAttributes('depth', value)}
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
