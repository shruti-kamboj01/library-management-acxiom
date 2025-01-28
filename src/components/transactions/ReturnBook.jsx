import React from "react";

const ReturnBook = ({ books, available_books, available_authors, serial_no }) => {
 
  return (
    <div className="w-full border-2 border-white h-[80vh] py-8">
      <h1 className="flex flex-col text-center ">Return Book</h1>
      <form className="flex flex-col space-y-4 mt-4 w-full">
        <label className="grid grid-flow-col grid-cols-2 px-8">
          <h1 className="">Enter Book Name :</h1>
          <select className="">
          <option>Select book name</option>
              {available_books.map((book, i) => {
                return <option className="text-black " >{book}</option>
              })}
           
          </select>
        </label>
        <label className="grid grid-flow-col grid-cols-2 px-8">
          <h1>Enter Author :</h1>
        <select>
        <option>Select book author</option>
        {available_authors.map((author, i) => {
             return <option className="text-black">{author}</option>
        })}
        </select>
        </label>
        <label className="grid grid-flow-col grid-cols-2 px-8">
          <h1>Serial No :</h1>
          <select>
            <option>Select serial number</option>
            {serial_no.map((num, i) => {
              return <option className="text-black">{num}</option>
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

export default ReturnBook;
