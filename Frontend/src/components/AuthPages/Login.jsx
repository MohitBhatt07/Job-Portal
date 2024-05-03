
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axiosConfig";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";

const Login = (event) => {
  const navigate = useNavigate();
  const [formData , setFormData ] = useState([]);
  const {setUser} = useContext(UserContext);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = async(event) => {
    event.preventDefault();
    try {
      const response = await API.post("/auth/signin",formData );
      const data  = response.data;
      setUser(data);
      localStorage.setItem("userToken" , JSON.stringify(data.jwtToken));
      toast.success("Successfully signed in");
      navigate('/');
    } catch (error) {
        toast.error(error.message);      
    }
  };
  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Job Board
          </h2>
          <p className="text-lg text-gray-600 text-center">Welcome back!</p>
          <form onSubmit={loginHandler}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                onChange={handleOnChange}
                name="username"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                name="password"
                onChange={handleOnChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link
              to={"/signup"}
              href="#"
              className="text-xs text-gray-500 uppercase"
            >
              or sign up
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
