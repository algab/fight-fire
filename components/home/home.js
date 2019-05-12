import React from "react";
import { Font, AppLoading } from 'expo';
import { Root, Container, Tabs, Tab } from 'native-base';

import HeaderApp from '../header/header';
import Global from './global';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: false }
    }

    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
        });
        this.setState({ loading: true });
    }

    render() {
        if (this.state.loading) {
            return (
                <Container>
                    <HeaderApp />
                    <Tabs>
                        <Tab heading="TRRF Global" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                            <Global />
                        </Tab>
                        <Tab heading="Laje" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                        </Tab>
                        <Tab heading="Viga" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
                        </Tab>
                        <Tab heading="Pilar" tabStyle={{ backgroundColor: '#8b0000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#8b0000' }}>
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