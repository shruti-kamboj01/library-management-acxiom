import React from 'react'
import { useNavigate } from 'react-router'

const admin = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div>
            <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >Home page</button>
            <button onClick={() => navigate('/')}
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"> 
                Back </button> 
        </div>
        <div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Maintenance</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Reports</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Tranactions</button>
     

        </div>

        <h1>Product Details</h1>


    </div>
  )
}

export default admin