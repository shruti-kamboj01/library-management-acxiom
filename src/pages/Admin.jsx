import React from 'react'
import { useNavigate } from 'react-router'

const Admin = () => {
    const navigate = useNavigate()
    return (
      <div>
          <div>
              <button>Home page</button>
              <button onClick={() => navigate('/')}> Back </button> 
          </div>
  
  
      </div>
    )
}

export default Admin