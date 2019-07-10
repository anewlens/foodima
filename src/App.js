import React from 'react';
import './App.scss';

import Navbar from './components/Navbar.component'
import Hero from './components/Hero.component'
import Recipes from './components/Recipes.component'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Recipes />
    </div>
  );
}

export default App;
