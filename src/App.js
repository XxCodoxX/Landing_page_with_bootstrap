import React from 'react';
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import HomeCheck from './components/pages/HomeCheck'



function App() {
  return (
    <BrowserRouter>
    <MainComponent/>
    <Routes >
      <Route exact path="/check" component={HomeCheck} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
