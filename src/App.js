import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
// eslint-disable-next-line
import Search from './components/search/Search';

import './App.css';

class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
       <div>
         <NavBar />
       </div>
     </MuiThemeProvider>
    );
  }
}

export default App;
