//import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from './components/Form/Form'
import ListNews from "./components/ListNews/ListNews";

import './App.css'
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/ListNews" element={<ListNews />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;

