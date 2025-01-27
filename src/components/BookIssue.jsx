import React, { useState } from "react";
import { useNavigate } from "react-router";

const BookIssue = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    issueDate: "",
    returnDate: "",
    remarks: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("entered")
    const bookName = formData.name
    let books = JSON.parse(localStorage.getItem("books")) || [];
    const foundBook = books.find(book => book.BookName === bookName)
    if(foundBook) {
        foundBook.Available = "No"
    }
    localStorage.setItem("books", JSON.stringify(books));
   };

  return (
    <div className="w-full mx-auto border-2 border-white ">
      <h1 className="flex flex-col text-center mt-2">Book Issue</h1>
      <form
        className="flex flex-col gap-3 text-center"
        onSubmit={submitHandler}
      >
        <label className="flex justify-evenly">
          <h1>Enter Book Name</h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Type here"
            className="input w-full mt-1 max-w-xs mr-2"
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
            className="input w-full mt-1 max-w-xs mr-2"
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
            className="input w-full mt-1 max-w-xs mr-2"
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
            className="input w-full mt-1 max-w-xs mr-2"
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
            className="input w-full mt-1 max-w-xs mr-2"
            onChange={changeHandler}
          />
        </label>
        <div className="flex mt-3 gap-3 mb-2 ml-2">
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
