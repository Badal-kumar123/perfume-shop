import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';



export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Logging in:', form);
    // call login API
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-50">
      <h3 className="text-4xl font-bold text-purple-600">PerfumeShop</h3>
      <div className="w-full px-6 py-4 mt-6 bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <form onSubmit={handleSubmit}>
          {['email', 'password'].map((field, idx) => (
            <div key={idx} className="mt-4">
              <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'password' ? 'password' : 'text'}
                name={field}
                id={field}
                value={form[field]}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          ))}
          <div className="flex items-center justify-end mt-6">
            <Link to="/signup" className="text-sm text-gray-600 underline hover:text-gray-900">
              Create account
            </Link>
            <button
              type="submit"
              className="ml-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>

         
         
      </div>
    </div>
  );
}
