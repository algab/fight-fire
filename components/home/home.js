import React from "react";
import { Font, AppLoading } from 'expo';
import { ScrollView, KeyboardAvoidingView } from "react-native";
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
                    <ScrollView>
                        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                            <Tabs page={this.state.page}>
                                <Tab heading="TRRF Global" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                                    <Global changePage={this.changePage.bind(this)} />
                                </Tab>
                                <Tab heading="Laje" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                                    <Slab trrf={this.state.trrf} changePage={this.changePage.bind(this)} />
                                </Tab>
                                <Tab heading="Viga" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                                    <Beam trrf={this.state.trrf} changePage={this.changePage.bind(this)} />
                                </Tab>
                                <Tab heading="Pilar" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                                    <Column trrf={this.state.trrf} changePage={this.changePage.bind(this)} />
                                </Tab>
                            </Tabs>
                        </KeyboardAvoidingView>
                    </ScrollView>
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