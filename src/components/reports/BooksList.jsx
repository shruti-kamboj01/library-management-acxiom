import React from "react";

const BooksList = () => {
  const data = JSON.parse(localStorage.getItem("books"));
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center mb-2">Master List of Books</div>
      <div className="overflow-x-auto">
        <table className="table table-xs border-b-2 border-t-2 border-l-2 border-r-2 border-gray-400">
          <thead className="">
            <tr>
              <th className="border-r-2">Serial No</th>
              <th className="border-r-2">Name of Book</th>
              <th className="border-r-2">Author Name</th>
              <th className="border-r-2">Category</th>
              <th className="border-r-2">Status</th>
              <th className="border-r-2">Cost</th>
              <th>Procurement Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, i) => {
              return (
                <tr key={i}>
                  <td className="border-r-2 border-gray-400">{ele.SerialNumber}</td>
                  <td className="border-r-2 border-gray-400">
                    {ele.BookName}
                  </td>

                  <td className="border-r-2 border-gray-400">{ele.AuthorName}</td>
                  <td className="border-r-2 border-gray-400">
                    {ele.contactNumber}
                  </td>
                  <td className="border-r-2 border-gray-400">
                    {ele.Available}
                  </td>
                  <td className="border-r-2 border-gray-400">
                    {ele.startDate}
                  </td>
                  <td className="border-r-2 border-gray-400">{ele.endDate}</td>
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksList;
