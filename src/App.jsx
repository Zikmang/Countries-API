import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css"
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Navbar from './pages/Navbar'

function App(){
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  }

  useEffect(() => {
    if(darkMode) {
      document.body.classList.add('dark-mode');
    }else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode])
  return(
    <>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/country/:countryName" element={<DetailPage />} />
      </Routes>
      
    </>
  )
}

export default App;