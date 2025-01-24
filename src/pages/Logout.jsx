import React from 'react'
import { useNavigate } from 'react-router'

const Logout = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full'>
    <button
          onClick={() => navigate("/")}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ml-3 mt-2"
        >
          Login{" "}
        </button>
    <div className='flex justify-center items-center mx-auto'>
    You have successfully logged out.</div>
    </div>

  )
}

export default Logout