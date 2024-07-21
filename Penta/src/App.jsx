
import { useEffect, useState } from 'react';
import './App.css'
import Login from './Components/Login'
import Navbar from './Components/Navbar'

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'EN');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <>
    <Navbar language={language} setLanguage={setLanguage}/>
    <Login />
    </>
  )
}

export default App
