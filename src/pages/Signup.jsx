import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const errs = {};
    if (!form.name) errs.name = 'Name required';
    if (!form.email) errs.email = 'Email required';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords must match';
    if (Object.keys(errs).length) return setErrors(errs);
    console.log('Signing up:', form);
    // later: call API
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-50">
      <h3 className="text-4xl font-bold text-purple-600">PerfumeShop</h3>
      <div className="w-full px-6 py-4 mt-6 bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <form onSubmit={handleSubmit}>
          {['name', 'email', 'password', 'confirmPassword'].map((field, idx) => (
            <div key={idx} className="mt-4">
              <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                {field === 'confirmPassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field.includes('password') ? 'password' : 'text'}
                name={field}
                id={field}
                value={form[field]}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors[field] && <p className="text-red-500 text-xs italic">{errors[field]}</p>}
            </div>
          ))}
          <div className="flex items-center justify-end mt-6">
            <Link to="/login" className="text-sm text-gray-600 underline hover:text-gray-900">
              Already have an account?
            </Link>
            <button
              type="submit"
              className="ml-4 px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
