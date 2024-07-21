import React from 'react'
import Navbar from './Navbar'

function CreateUser() {
    return (
        <div>
            <Navbar />
            <h1 className='text-center text-2xl py-5'>Create User</h1>
            <form className="px-8 pt-6 pb-8 mb-4 w-3/4 m-auto">
                <div className="mb-4">
                    <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="">
                        Choose Image
                    </label>
                    <input className="shadow bg-white border rounded w-full py-2 px-3 " type='file'></input>
                </div>
                <div className="mb-4">
                    <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray" type='text' />
                </div>
                <div className="mb-4">
                    <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="">
                        Email Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray" type='email' />
                </div>
                <div className="mb-4">
                    <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray" type='password' required />
                </div>
                <div className="mb-4">
                    <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="">
                        Verify Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray" type='password' />
                </div>
                <div className="mb-4">
                    <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="">
                        User Type
                    </label>
                    <select className="shadow border rounded w-full py-2 px-3 text-gray">
                        <option value="" selected></option>
                        <option>Admin</option>
                        <option>Doctor</option>
                        <option>Employee</option>
                    </select>
                </div>
                <div className="flex justify-center">
                    <button className="bg-custom-blue hover:bg-custom-primary-dark text-white rounded-lg px-5 py-2">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser