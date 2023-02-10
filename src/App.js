import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
            <Route index element={<TextForm showAlert={showAlert} heading="Enter the text here to analyze below" mode={mode}/>} />
            <Route exact path="/about" element={<About mode={mode}/>}/>
          </Routes>
      </div>
      </BrowserRouter>  
    </>
  );
}

export default App;
