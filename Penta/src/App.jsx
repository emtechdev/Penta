import './App.css'
import Login from './Components/Login'
import CreateUser from './Components/CreateUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/create_user" element={<CreateUser />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
