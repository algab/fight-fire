import React from 'react';
import { Text } from 'react-native';
import { Container, Tabs, Tab } from 'native-base';

import Header from '../../components/Header';
import Slab from '../../components/Slab';

import { styles } from './styles';

export default function Structures({ route: { params } }) {    
    return (
        <Container>
            <Header />
            <Tabs>
                <Tab heading="Laje" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab}>
                    <Slab trrf={params.trrf} />
                </Tab>
                <Tab heading="Viga" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab}>
                    <Text>Viga</Text>
                </Tab>
                <Tab heading="Pilar" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab}>
                    <Text>Pilar</Text>
                </Tab>
            </Tabs>
        </Container>
    );
};
