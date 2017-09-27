import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Display from "./components/Display";

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
    <Display/>
</BrowserRouter>
      </div>
    );
  }
}

export default App;
