import React, { useState, useEffect, useContext } from 'react';
import { ImSpinner8 } from "react-icons/im";
import PageTitle from '../Components/PageTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SlqsContext } from '../Context/SlqsContext';

const Admin = () => {

    const {DIR} = useContext(SlqsContext);


    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);
        let responseData;

        await fetch(`${DIR}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then((data) => responseData = data);

        if (responseData.success) {
            const token = responseData.token;
            const expirationTime = Date.now() + 30 * 60 * 1000; // 30 minutes from now

            localStorage.setItem('auth-token', token);
            localStorage.setItem('auth-token-expiration', expirationTime);
            sessionStorage.setItem('auth-token', token);

            setIsLoggedIn(true);
            fetchUserData(token);
        } else {
            // alert(responseData.errors);
            toast.error(responseData.errors, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
        setLoading(false);
    };

    const fetchUserData = async (token) => {
        try {
            const response = await fetch(`${DIR}/loggeduser`, {
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
        localStorage.removeItem('auth-token-expiration');
        sessionStorage.removeItem('auth-token');
        setIsLoggedIn(false);
        setUserData(null);
    };

    const checkTokenExpiration = () => {
        const expirationTime = localStorage.getItem('auth-token-expiration');
        if (expirationTime && Date.now() > expirationTime) {
            logout();
        }
    };

    useEffect(() => {
        const token = sessionStorage.getItem('auth-token');
        if (token) {
            setIsLoggedIn(true);
            fetchUserData(token);
        }

        checkTokenExpiration();

        const interval = setInterval(checkTokenExpiration, 60 * 1000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            
            <PageTitle name="admin" />
            <div
            data-aos="zoom-in-right"
    data-aos-duration="1000"
             className="relative flex flex-col justify-center min-h-[50vh]  h-auto my-10 overflow-hidden">
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
                                onClick={() => window.location.href = 'http://localhost:5173/'}
                                    // onClick={() => window.open('http://localhost:5173/', '_blank')}
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