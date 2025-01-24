import React, { useState } from 'react'

export const Book_availability = ({ available_books, available_authors,books }) => {
  const [query, set_query] = useState([null, null])
  const [showForm, setShowForm] = useState(true)
  const [searchResults,setResult] = useState([])
  function serachHandler() {
    if (query[0] || query[1]) {
      setResult(books.filter((book)=>{
        return book.BookName == query[0] || book.AuthorName == query[1]
      }))
      console.log(searchResults)
      setShowForm((prev) => !prev)
    }
    else {
      alert("Enter both Book name and author name")
    }
  }
  function bookSelected(event) {
    const serialNo = event.target.value
    console.log(serialNo)
  }
  return (
    <div className="w-full border-2 border-white h-[80vh] py-8">
      <div className="flex flex-col text-center ">
        <h2>Book Availability</h2>
        {showForm ?
          <div>
            <div className="flex flex-col space-y-4 mt-4">
              <div className='grid grid-flow-col grid-cols-2 px-8'>
                <label className=''>Enter Book Name :</label>
                <select className='' onChange={(val) => { val = val.target.value; set_query((prev) => [val, prev[1]]) }}>
                  <option value={null}>Select book name</option>
                  {
                    available_books.map((book, i) => {
                      return <option key={i} value={book}>{book}</option>
                    })
                  }
                </select>
              </div>
              <div className='grid grid-flow-col grid-cols-2 px-8'>
                <label className=''>Enter Author :</label>
                <select className='' onChange={(val) => { val = val.target.value; set_query((prev) => [prev[0], val]) }}>
                  <option value={null}>Select author</option>
                  {
                    available_authors.map((author, i) => {
                      return <option key={i} value={author}>{author}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <button className="btn btn-sm w-[20%] self-end mt-4 mr-8 " onClick={serachHandler}>Search</button>
          </div>
          :
          <table className="md">
            <thead>
              <tr>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Serial Number</th>
                <th>Avilable</th>
                <th>Select to issuse this book</th>
              </tr>
              {
                searchResults.map((book, i) => {
                  return <tr key={i}>
                    <td>{book['BookName']}</td>
                    <td>{book['AuthorName']}</td>
                    <td>{book['SerialNumber']}</td>
                    <td>{book['Available']}</td>
                    <td><input onChange={bookSelected} value={book['SerialNumber']} type="radio" name="selected_book" /></td>
                  </tr>
                })

              }
            </thead>

          </table>
        }
      </div>
    </div >
  )
}

