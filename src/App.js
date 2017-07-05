import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Body from './Article Content/primarybody'
import SideBar from './Sidebar/Sidebar'
import OtherArticles from './Additional Articles/OtherArticles'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
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
