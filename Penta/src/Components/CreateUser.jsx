import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function CreateUser({ setUsers, editUser, setEditUser }) {
  const [formData, setFormData] = useState({
    image: '',
    username: '',
    email: '',
    password: '',
    userType: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => {
      let updatedUsers;
      if (editUser) {
        updatedUsers = prevUsers.map((user) =>
          user.email === editUser.email ? formData : user
        );
        setEditUser(null); // Clear editUser state
      } else {
        updatedUsers = [...prevUsers, formData];
      }
      localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to local storage
      return updatedUsers;
    });
    // Reset the form data
    setFormData({
        image: '',
        username: '',
        email: '',
        password: '',
        verifyPassword: '',
        userType: '',
      });
    navigate('/users');
  };

  return (
    <div>
      <Navbar />
      <h1 className='text-center text-2xl py-5'>{editUser ? 'Edit User' : 'Create User'}</h1>
      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 w-3/4 m-auto">
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="image">
            Choose Image
          </label>
          <input className="shadow bg-white border rounded w-full py-2 px-3" type="file" name="image" onChange={handleFileChange} />
        </div>
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray" type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray" type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray" type="password" required name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="verifyPassword">
            Verify Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray" type="password" name="verifyPassword" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="userType">
            User Type
          </label>
          <select className="shadow border rounded w-full py-2 px-3 text-gray" name="userType" value={formData.userType} onChange={handleChange}>
            <option value="" ></option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button className="bg-custom-blue hover:bg-custom-primary-dark text-white rounded-lg px-5 py-2" type='submit'>
            {editUser ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
