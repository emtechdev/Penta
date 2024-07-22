import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons

function Users({ users, setUsers, setEditUser }) {
  const navigate = useNavigate();
  const [showPasswords, setShowPasswords] = useState(Array(users.length).fill(false)); // State to manage password visibility

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Update local storage
  };

  const handleEdit = (index) => {
    setEditUser(users[index]);
    navigate('/create_user');
  };

  const togglePasswordVisibility = (index) => {
    const updatedShowPasswords = [...showPasswords];
    updatedShowPasswords[index] = !updatedShowPasswords[index];
    setShowPasswords(updatedShowPasswords);
  };

  return (
    <div>
      <Navbar />
      <div className='container mx-auto mt-10'>
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate('/create_user')}
          >
            New +
          </button>
          <span className="text-lg font-semibold">Total Users: {users.length}</span>
        </div>
        <div className="overflow-x-auto">
          <table id="myTable" className="min-w-full divide-y divide-gray-500 border border-slate-500">
            <thead className="bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-black uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-black uppercase tracking-wider">User Type</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-black uppercase tracking-wider">Email Address</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-black uppercase tracking-wider">Password</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-black uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 text-center text-md font-medium text-black">{user.username}</td>
                  <td className="px-6 py-3 text-center text-md font-medium text-black">{user.userType}</td>
                  <td className="px-6 py-3 text-center text-md font-medium text-black">{user.email}</td>
                  <td className="px-6 py-3 text-center text-md font-medium text-black">
                    {showPasswords[index] ? user.password : '•'.repeat(user.password.length)}
                    <button onClick={() => togglePasswordVisibility(index)} className="ml-2">
                      {showPasswords[index] ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center text-md font-medium text-black">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-1 rounded" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded ml-2" onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
