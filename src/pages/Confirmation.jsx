import React from 'react'
import { useNavigate } from 'react-router'

const Confirmation = () => {
    const navigate = useNavigate()
    
  const logoutHandler = () => {
    localStorage.clear()
    navigate('/admin')
  }
  return (
    <div className='w-11/12 mx-auto flex items-center flex-col justify-center'>
    <h1 className='mt-10 text-lg font-semibold'>Transaction completeld successfully.</h1>
    <button
      onClick={logoutHandler}
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg flex justify-end"
    >
      Log out
    </button>
</div>
  )
}

export default Confirmation