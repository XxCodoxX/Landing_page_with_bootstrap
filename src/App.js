import React from 'react';
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import MainComponent from './components/MainComponent';



function App() {
  return (
    <BrowserRouter>
    <MainComponent/>
    <Routes >
      <Route exact path="/check" component={""} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
