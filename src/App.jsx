import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import './styles/components.css';

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;