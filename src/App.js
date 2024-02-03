import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Accommodations from './components/Accommodation';
import FamilyS from './components/FamilyS';
import BedBath from './components/BedBath';
import Promo from './components/Promo';
import Press from './components/Press';
import Bottom from './components/Bottom';

function App() {
  const containerStyle = {
    margin: '0', // Remove default margin
    padding: '0', // Remove default padding
  };

  return (
    <div className="App">
      <div className="container-fluid" style={containerStyle}>
        <Hero />
        <Welcome />
        <Accommodations />
        <FamilyS />
        <BedBath />
        <Promo />
        <Press />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
