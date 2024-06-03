import React, { useState } from 'react';

const Admin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Login Function Executed', formData);
    let responseData;

    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(res => res.json()).then((data) => responseData = data);

    if (responseData.success) {
      // Save the login token in local storage
      localStorage.setItem('auth-token', responseData.token);
      window.open('http://localhost:5173/', '_blank');  // Redirect to the external admin frontend URL
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-red-900 underline">
          Admin Sign in
        </h1>
        <form className="mt-6" onSubmit={login}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-red-900 bg-white border rounded-md focus:border-red-800 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-red-900 bg-white border rounded-md focus:border-red-800 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
