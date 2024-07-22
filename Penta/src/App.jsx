import './App.css'
import Login from './Components/Login'
import CreateUser from './Components/CreateUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './Components/Users';
import { useEffect, useState } from 'react';
import AddTasks from './Components/AddTasks/AddTasks';
import CreateTasks from './Components/CreateTasks';

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // Load users from local storage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  // Save users to local storage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/create_user" element={<CreateUser setUsers={setUsers} editUser={editUser} setEditUser={setEditUser}/>} />
        <Route path='/users' element={<Users users={users} setUsers={setUsers} setEditUser={setEditUser}/>} />
        <Route path='/addtasks' element={<AddTasks/>}></Route>
        <Route path='/createtasks' element={<CreateTasks/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
