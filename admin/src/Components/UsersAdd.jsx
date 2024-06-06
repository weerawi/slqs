import { useState } from "react";

const UsersAdd = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const Add_User = async () => {
    let responseData;

    // Save user details in the database
    let user = {
      ...userData,
    };

    await fetch('http://localhost:4000/addusers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then((data) => {
        responseData = data;
        if (responseData.success) {
          alert('User Added');
          setUserData({
            name: "",
            email: "",
            password: "",
          });
        } else {
          alert('User not added');
        }
      });
  };

  return (
    <div className="mx-auto">
      <div className='text-4xl flex items-center justify-center py-10'> User Add</div>
      <div className="flex flex-col gap-7 p-16 bg-gray-200 ml-5 my-5 w-auto sm:w-[500px] lg:w-[750px]   font-custom-robot">
        <div className="space-y-2">
          <p>Name</p>
          <input
            value={userData.name}
            onChange={changeHandler}
            className="text-sm p-2 w-[100%]"
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>

        <div className="space-y-2">
          <p>Email</p>
          <input
            value={userData.email}
            onChange={changeHandler}
            className="text-sm p-2 w-[100%]"
            type="email"
            name="email"
            placeholder="Type here"
          />
        </div>

        <div className="space-y-2">
          <p>Password</p>
          <input
            value={userData.password}
            onChange={changeHandler}
            className="text-sm p-2 w-[100%]"
            type="password"
            name="password"
            placeholder="Type here"
          />
        </div>

        <button
          onClick={Add_User}
          className="w-60 bg-red-400 p-4 rounded-3xl border-2 border-gray-800 my-5 font-semibold hover:text-gray-300 hover:bg-red-500 transition-colors duration-100"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default UsersAdd;
