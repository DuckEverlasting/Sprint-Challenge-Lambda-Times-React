import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import ContentAuth from './components/Authentication/ContentAuth';
import Carousel from "./components/Carousel/Carousel"

const App = () => {
  return (
    <div className="App">
      <Carousel />
      <TopBar />
      <Header />
      <ContentAuth />
    </div>
  );
}

export default App;
