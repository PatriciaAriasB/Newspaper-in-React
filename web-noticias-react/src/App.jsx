//import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Form } from './components/Form/Form';
import  ListNews from "./components/ListNews/ListNews";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import './App.css';
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/ListNews" element={<ListNews />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer /> 
      </Router>
    </GlobalProvider>
  );
}

export default App;
