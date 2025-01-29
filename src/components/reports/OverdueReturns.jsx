import React from 'react'
import { useNavigate } from 'react-router'

const OverdueReturns = () => {
  const navigate = useNavigate()
    const loggedInAs = localStorage.getItem("loggedInAs")
  return (
    <div className='flex flex-col w-full'>
       
        <div className='flex justify-center mb-2'>Overdue Returns</div>
        <div className="overflow-x-auto">
  <table className="table table-xs border-b-2 border-t-2 border-l-2 border-r-2 border-gray-400">
    <thead className=''>
      <tr >
        <th className='border-r-2'>Serial No Book</th>
        <th className='border-r-2'>Name of Book</th>
        <th className='border-r-2'>Membership Id</th>
        <th className='border-r-2'>Date of Issue</th>
        <th className='border-r-2'>Date of return</th>
        <th >Fine Calculations</th>
      </tr>
    </thead>
    <tbody>
      <tr className=''>
        <th className='border-r-2 border-gray-400'>1</th>
        <td className='border-r-2 border-gray-400'>Cy Ganderton</td>
        <td className='border-r-2 border-gray-400'>Quality Control Specialist</td>
        <td className='border-r-2 border-gray-400'>Littel, Schaden and Vandervort</td>
        <td className='border-r-2 border-gray-400'>Canada</td>
        <td >Blue</td>
      </tr>
    
    
 </tbody>
  </table>
</div>
    </div>
  )
}

export default OverdueReturns