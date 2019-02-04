import React, { Component } from 'react';
import Main from './pages/Main';
import GlobalStyle from './styles/global';

class App extends Component {

  state = {
    ready: false
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Main />
      </div>
    );
  }
}

export default App;
