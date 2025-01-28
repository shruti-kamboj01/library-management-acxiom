import React, { useState } from "react";

const ReturnBook = ({
  books,
  available_books,
  available_authors,
  serial_no,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    serialNo: "",
    returnDate: "",
    remarks: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const [date, setDate] = useState("");
  function findIssueDate() {
    const num = formData.serialNo;
    const book = books.find((book) => book.SerialNumber === num);
    setDate(book.IssueDate);
  }

  function submitHandler(e) {
    e.preventDefault();
    const foundBook = books.find(
      (book) => book.SerialNumber === formData.serialNo
    );

    if (foundBook) {
      foundBook.Available = "Yes";
      foundBook.ReturnDate = formData.returnDate;
      localStorage.setItem("books", JSON.stringify(books));
    }
    // setFormData("")
    // setDate("")
  }

  return (
    <div className="w-full border-2 border-white h-[85vh] py-8">
      <h1 className="flex flex-col text-center ">Return Book</h1>
      <form
        className="flex flex-col space-y-4 mt-4 w-full"
        onSubmit={submitHandler}
      >
        <label className="grid grid-flow-col grid-cols-2 px-8">
          <h1 className="">Enter Book Name :</h1>
          <select
            className=""
            name="name"
            value={formData.name}
            onChange={changeHandler}
          >
            <option>Select book name</option>
            {available_books.map((book, i) => {
              return <option className="text-black">{book}</option>;
            })}
          </select>
        </label>
        <label className="grid grid-flow-col grid-cols-2 px-8">
          <h1>Enter Author :</h1>
          <select
            name="author"
            value={formData.author}
            onChange={changeHandler}
          >
            <option>Select book author</option>
            {available_authors.map((author, i) => {
              return <option className="text-black">{author}</option>;
            })}
          </select>
        </label>
        <label className="grid grid-flow-col grid-cols-2 px-8">
          <h1>Serial No :</h1>
          <select
            required
            name="serialNo"
            value={formData.serialNo}
            onChange={changeHandler}
          >
            <option>Select serial number</option>
            {serial_no.map((num, i) => {
              return <option className="text-black">{num}</option>;
            })}
          </select>
        </label>
        <label className="grid grid-flow-col grid-cols-2 px-8">
          <h1>Issue Date :</h1>
          <h1 className="sm:ml-6 mt-1 lg:ml-10 border-1 h-6.5 px-1">{date}</h1>
          <button
            className="btn btn-xs sm:btn-sm h-7.5  md:btn-md lg:btn-lg"
            onClick={() => findIssueDate()}
            type="button"
          >
            Find
          </button>
        </label>
        <label className="grid grid-flow-col grid-cols-2 px-8">
          <h1>Return Date :</h1>
          <input
            type="date"
            name="returnDate"
            onChange={changeHandler}
            value={formData.returnDate}
          />
        </label>

        <label className="grid grid-flow-col grid-cols-2 px-8">
          <h1>Remarks :</h1>
          <textarea
            placeholder="Type here"
            name="remarks"
            onChange={changeHandler}
            value={formData.remarks}
          />
        </label>
        <div className="ml-2 space-x-1">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
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

export default ReturnBook;
