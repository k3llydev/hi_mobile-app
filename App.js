import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';

import NavBar from './NavBar'
import Content from './Content'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',data: false};
  }

  render() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(124, 125, 114, 1)'}}>
          <NavBar />
          <Content />
        </SafeAreaView>
    );
  }
}