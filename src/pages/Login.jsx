import React, { useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const users = [
    { name: "Shruti", password: "password123", role: "admin" },
    { name: "Aryan", password: "securePass456", role: "user" },
    { name: "Mamta", password: "Pass789", role: "admin" },
    { name: "Khushi", password: "StrongPass", role: "user" }
];
  
const Login = () => {

    const [formdata, setformdata] = useState({name:"", password:""})
    const [showPassword, setShowPassword] = useState(false);
    const user = users.find( (u) => u.name === formdata.name && u.password === formdata.password)
    const navigate = useNavigate()

    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
    const submithandler = () => {
        if(user.role === "admin") {
                navigate('/admin')
             } else if(user.role === "user") {
                 navigate('/user')
             }
             else {
                 alert("Invalid username or password")
             }
    }

  return (

 
    <div className="flex flex-col mx-auto items-center w-full max-w-max gap-y-10 mt-12">
      <h1 className="text-2xl font-bold"> Library Management System </h1>
      <form onSubmit={submithandler}>
        <div className="">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text " >User Id</span>
           
          </div>
          <input
            type="text"
            placeholder="Type here"
            value={formdata.name}
            onChange={handleInputChange}
            name="name"
            className="input input-bordered w-full max-w-xs mb-2"
            required
          />
          </label>
          <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text ">Password</span>
           
          </div>
          <div>
          <input
            type={showPassword ? ('text') : ('password')}
            placeholder="Type here"
            value={formdata.password}
            name="password"
            onChange={handleInputChange}
            className="input input-bordered relative w-full max-w-xs"
            required
          />
          <span 
            onClick={() => setShowPassword((prev) => !prev)}
            className='absolute -translate-x-8 translate-y-2 cursor-pointer'
            >
              {
                  showPassword ? 
                  (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
                  (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)

              }
            </span>
          </div>
          
          </label>
          <div className="flex gap-x-2 mt-4">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Cancel</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Login</button>
          </div>
        </div>
       
       
   
      </form>
    </div>
  );
};

export default Login;
