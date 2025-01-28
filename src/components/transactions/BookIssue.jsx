import React, { useState } from "react";
import { useNavigate } from "react-router";

const BookIssue = ({serial_no,  books, available_books, available_authors}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    serialNo:"",
    issueDate: "",
    returnDate: "",
    remarks: "",
  });
 console.log(serial_no)
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
 console.log(formData)
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData)
    const bookName = formData.name
    const serialNo = formData.serialNo
    let books = JSON.parse(localStorage.getItem("books")) || [];
    console.log(books)
    const foundBook = books.find(book => book.BookName === bookName)
    const foundSerialNo = serial_no.filter(num => num === serialNo)
    console.log(foundSerialNo[0])
    if(foundBook && foundSerialNo[0]) {
        foundBook.Available = "No"
        foundBook.IssueDate = formData.issueDate
        foundBook.ReturnDate = formData.returnDate
    }
    console.log(foundBook)
    localStorage.setItem("books", JSON.stringify(books));
   };

  return (
    <div className="w-full mx-auto border-2 border-white ">
      <h1 className="flex flex-col text-center mt-2 mb-2">Book Issue</h1>
      <form
        className="flex flex-col gap-y-3"
        onSubmit={submitHandler}
      >
        <label className="flex justify-evenly mr-3.5">
          <h1>Enter Book Name</h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Type here"
            className="input w-full mt-1 max-w-xs"
            onChange={changeHandler}
            required
          />
        </label>
        <label className="flex justify-evenly">
          <h1>Enter Author</h1>
          <input
            type="text"
            name="author"
            value={formData.author}
            placeholder="Type here"
            className="input w-full mt-1 max-w-xs"
            onChange={changeHandler}
            required
          />
        </label>
        <label className="flex justify-evenly">
          <h1>Serial Number</h1>
          <input
            type="text"
            name="serialNo"
            value={formData.serialNo}
            placeholder="Type here"
            className="input w-full mt-1 max-w-xs"
            onChange={changeHandler}
            required
          />
        </label>
        <label className="flex justify-evenly">
          <h1>Issue Date</h1>
          <input
            type="date"
            name="issueDate"
            value={formData.issueDate}
            className="input w-full mt-1 max-w-xs ml-2.5"
            onChange={changeHandler}
            required
          />
        </label>
        <label className="flex justify-evenly">
          <h1>Return Date</h1>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            placeholder="Type here"
            className="input w-full mt-1 max-w-xs"
            onChange={changeHandler}
            required
          />
        </label>
        <label className="flex justify-evenly">
          <h1>Remarks</h1>
          <textarea
            name="remarks"
            value={formData.remarks}
            placeholder="Type here"
            className="input w-full mt-1 max-w-xs ml-5"
            onChange={changeHandler}
          />
        </label>
        <div className="flex mt-3 gap-3 mb-2">
          <button
            onClick={() => navigate("/cancel")}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Cancel
          </button>

          <button
            
            type="submit"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookIssue;
