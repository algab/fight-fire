import React from "react";
import { Font, AppLoading } from 'expo';
import { Root, Container, Tabs, Tab } from 'native-base';

import HeaderApp from '../header/header';

import Global from './global';
import Slab from './slab';
import Beam from './beam';
import Column from './column';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, page: 0, trrf: undefined }
    }

    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
        });
        this.setState({ loading: true });
    }

    changePage(page, trrf) {
        this.setState({ page, trrf });
    }

    render() {
        if (this.state.loading) {
            return (
                <Container>
                    <HeaderApp />
                    <Tabs page={this.state.page}>
                        <Tab heading="TRRF Global" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                            <Global changePage={this.changePage.bind(this)} />
                        </Tab>
                        <Tab heading="Laje" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                            <Slab />
                        </Tab>
                        <Tab heading="Viga" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                            <Beam />
                        </Tab>
                        <Tab heading="Pilar" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                            <Column />
                        </Tab>
                    </Tabs>
                </Container>
            )
        }
        else {
            return (
                <Root>
                    <AppLoading />
                </Root>
            )
        }
    }
}

export default Home;