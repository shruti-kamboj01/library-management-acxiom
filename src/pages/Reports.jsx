import React from 'react'
import { useNavigate } from 'react-router'

const Reports = () => {
  const loggedInAs = localStorage.getItem("loggedInAs")
  const navigate = useNavigate()
  return (

    <div className='w-11/12 mx-auto'>
      <div className='flex justify-end mt-2'>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
         onClick={() => navigate(`/${loggedInAs}`)}
        >Home</button>
      </div>
      <div className='flex flex-col items-center'>
        <h1>Available Reports</h1>

      </div>
    </div>
  )
}

export default Reports