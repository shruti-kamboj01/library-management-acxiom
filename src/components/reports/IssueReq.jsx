import React from 'react'
import { useNavigate } from 'react-router'

const IssueReq = () => {
  const navigate = useNavigate()
    const loggedInAs = localStorage.getItem("loggedInAs")
  return (
    <div className='flex flex-col w-full'>
       
        <div className='flex justify-center mb-2'>Issue Requests</div>
        <div className="overflow-x-auto">
  <table className="table table-xs border-b-2 border-t-2 border-l-2 border-r-2 border-gray-400">
    <thead className=''>
      <tr >
        <th className='border-r-2'>Membership Id</th>
        <th className='border-r-2'>Name of Book/Movie</th>
        <th className='border-r-2'>Requested Date</th>
        <th >Request Fulfilled Date</th>
      </tr>
    </thead>
    <tbody>
      <tr className=''>
        <th className='border-r-2 border-gray-400'></th>
        <td className='border-r-2 border-gray-400'></td>
        <td className='border-r-2 border-gray-400'></td>
        <td></td>
      </tr>
    
    
 </tbody>
  </table>
</div>
    </div>
  )
}

export default IssueReq