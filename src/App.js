import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Body from './primarybody'
import SideBar from './Sidebar'
import OtherArticles from './OtherArticles'
import Footer from './Footer'
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />

        <main className="expanded row">
          <Body />
          <SideBar />
          <OtherArticles />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
