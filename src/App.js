import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Share from './pages/Share';
import Downloader from './pages/Downloader';
import GlobalStyle from './styles/global';

function App() {

  return (
    <Router>
      <div>
        <GlobalStyle />

        <Route path="/" exact component={Share} />
        <Route path="/share" component={Share} />
        <Route path="/downloader" component={Downloader} />
      </div>
    </Router>
  )
}

export default App;
