import React from 'react'
import Navbar_login from './Navbar_login'

function Login() {
    return (
        <div className=''>
            <Navbar_login />
            <div className="container mx-auto">
                <div className="flex items-center justify-center">
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mt-20">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <h1 className='font-bold text-center py-5 text-xl'>Login</h1>
                            <form className="px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="">
                                        Choose Image
                                    </label>
                                    <select className="border shadow p-2 text-gray-900 text-sm rounded block w-full">
                                        <option selected>Choose an image</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="">
                                        Username
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray" type='text' />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-blue-800 text-sm font-bold mb-2" htmlFor="">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray" type='password' required />
                                </div>
                                <div className="flex justify-center">
                                    <button className="bg-custom-blue hover:bg-custom-primary-dark text-white rounded-lg px-3 py-2">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login