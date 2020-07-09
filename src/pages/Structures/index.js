import React from 'react';
import { Container, Tabs, Tab } from 'native-base';

import Header from '../../components/Header';
import Slab from '../../components/Slab';
import Beam from '../../components/Beam';
import Column from '../../components/Column';

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
                    <Beam trrf={params.trrf} />
                </Tab>
                <Tab heading="Pilar" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab}>
                    <Column trrf={params.trrf} />
                </Tab>
            </Tabs>
        </Container>
    );
};
