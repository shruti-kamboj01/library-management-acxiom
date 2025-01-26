import React from 'react'
import { useNavigate } from 'react-router'

const Cancel = () => {
    const navigate = useNavigate()
  return (
    <div className='w-11/12 mx-auto flex items-center flex-col justify-center'>
        <h1 className='mt-10 text-lg font-semibold'>Transaction cancelled</h1>
        <button
          onClick={() => navigate("/admin")}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          Log Out
        </button>
    </div>
  )
}

export default Cancel