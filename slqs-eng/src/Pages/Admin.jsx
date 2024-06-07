import React, { useState, useEffect } from 'react';
import { ImSpinner8 } from "react-icons/im";
import PageTitle from '../Components/PageTitle';

const Admin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);
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
      setIsLoggedIn(true);
      fetchUserData(responseData.token); // Fetch user data after login
    } else {
      alert(responseData.errors);
    }
    setLoading(false);
 
  };

  const fetchUserData = async (token) => {
    try {
      const response = await fetch('http://localhost:4000/loggeduser', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth-token');
    setIsLoggedIn(false);
    setUserData(null);

    // Set a timeout to clear login data after 30 minutes of inactivity
  const timeoutDuration =  60 * 1000; // 30 minutes in milliseconds
  setTimeout(() => {
    localStorage.removeItem('auth-token');
    setIsLoggedIn(false);
    setUserData(null);
  }, timeoutDuration);
  };

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      setIsLoggedIn(true);
      fetchUserData(token);
    }
  }, []);

  return (


    <>

    <PageTitle name="admin"/>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden  ">
      {!isLoggedIn ? (
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
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
                className="group w-full flex items-center justify-center gap-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                <ImSpinner8 className={loading ? 'animate-spin' : ''} />
                <div>Login</div>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-red-900 underline">
            Admin Details
          </h1>
          {userData && (
            <div className="mt-6">
              <h2>Name: {userData.name}</h2>
              <p>Email: {userData.email}</p>
              <button
                onClick={() => window.open('http://localhost:5173/', '_blank')}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Go to Admin Panel
              </button>
              <button
                onClick={logout}
                className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
    
    </>
  );
};

export default Admin;
