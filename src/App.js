import React, {Component} from 'react';
import ImageList from './ImageList.js';
import Header from './Header.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImageList />
      </div>
    )
  }
}


