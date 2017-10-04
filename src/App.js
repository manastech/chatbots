import React, { Component } from 'react';
import Header from './js/Header'
import SideBar from './js/SideBar'
import MainContent from './js/MainContent'
import Footer from './js/Footer'
import Md from 'react-md';
import './css/App.css';

class App extends Component {
  render() {

    return (
      <div className="grid">
        <Header />
        <main>
          <MainContent />
          <SideBar />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
