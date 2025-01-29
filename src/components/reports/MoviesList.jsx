import React from 'react'
import { useNavigate } from 'react-router'

const MoviesList = () => {
  const navigate = useNavigate()
  const loggedInAs = localStorage.getItem("loggedInAs")
return (
  <div className='flex flex-col w-full'>
     
      <div className='flex justify-center mb-2'>Master List of Movies</div>
      <div className="overflow-x-auto">
<table className="table table-xs border-b-2 border-t-2 border-l-2 border-r-2 border-gray-400">
  <thead className=''>
    <tr >
      <th className='border-r-2'>Serial No</th>
      <th className='border-r-2'>Name of Movie</th>
      <th className='border-r-2'>Author Name</th>
      <th className='border-r-2'>Category</th>
      <th className='border-r-2'>Status</th>
      <th className='border-r-2'>Cost</th>
      <th >Procurement Date</th>
    </tr>
  </thead>
  <tbody>
    <tr className=''>
      <th className='border-r-2 border-gray-400'>1</th>
      <td className='border-r-2 border-gray-400'>Cy Ganderton</td>
      <td className='border-r-2 border-gray-400'>Quality Control Specialist</td>
      <td className='border-r-2 border-gray-400'>Littel, Schaden and Vandervort</td>
      <td className='border-r-2 border-gray-400'>Canada</td>
      <td className='border-r-2 border-gray-400'>12/16/2020</td>
      <td >Blue</td>
    </tr>
  
  
</tbody>
</table>
</div>
  </div>
)
}

export default MoviesList