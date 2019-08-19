import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import Main from './containers/Main/Main';

class App extends Component {

    state = {
        login: false
    }

    loginHandler = () => this.setState({login: true});

    render() {
        let screen = <WelcomeScreen login={this.loginHandler} />
        if (this.state.login) screen = <Main />
        return (
            <Layout>
                {screen}
            </Layout>
        );
    }
}

export default App;
