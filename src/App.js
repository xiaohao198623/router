import React, { Component } from 'react';
import {HashRouter as Router } from 'react-router-dom'
import RouterView from './router/Router'
import Nav from './containers/Nav'


class App extends Component {
    componentWillMount (){
        console.log('===========app')
        console.log(this.props)
    }
  render() {
    return (
        <div>
            <Router>
                <div>
                    <Nav></Nav>
                    <RouterView ></RouterView>
                </div>
            </Router>
        </div>

    );
  }
}

export default App;
