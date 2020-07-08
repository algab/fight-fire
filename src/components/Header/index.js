import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

import { styles } from './styles';

export default function Header() {
    return (
        <View style={styles.header}>
            <Icon type="MaterialCommunityIcons" name='fire' style={styles.icon} />
            <Text style={styles.text}>Fight Fire</Text>
        </View>
    )
};
