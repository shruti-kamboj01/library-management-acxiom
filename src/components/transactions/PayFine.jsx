import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const PayFine = ( { books,serial_no, available_books, available_authors}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        author: "",
        serialNo: "",
        fine:"0",
        findPaid:false,
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
      const [issuedate, setissueDate] = useState("");
      const [returndate, setreturnDate] = useState("");
      const [actualreturndate, setactualreturnDate] = useState("");
      function findIssueDate() {
        const num = formData.serialNo;
        const book = books.find((book) => book.SerialNumber === num);
        setissueDate(book.IssueDate);
      }
      function findReturnDate() {
        const num = formData.serialNo;
        const book = books.find((book) => book.SerialNumber === num);
        setreturnDate(book.ReturnDate);
      }
      function findActualReturnDate() {
        const num = formData.serialNo;
        const book = books.find((book) => book.SerialNumber === num);
        setactualreturnDate(book.ActualReturnDate);
      }
      
      function submitHandler(e) {
        e.preventDefault();
        if(!localStorage.getItem("fine")) {
          localStorage.setItem("fine", JSON.stringify(formData))
        }
        else {
          let data = JSON.parse(localStorage.getItem("fine"))
          data.push(formData)
          localStorage.setItem("fine", data)
        }
      }
  return (
    <div className="w-full border-2 border-white  py-8">
        <h1 className="flex flex-col text-center ">PayFine</h1>
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
          <h1 className="sm:ml-6 mt-1 lg:ml-10 border-1 h-6.5 px-1">{issuedate}</h1>
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
          <h1 className="sm:ml-6 mt-1 lg:ml-10 border-1 h-6.5 px-1">{returndate}</h1>
          <button
            className="btn btn-xs sm:btn-sm h-7.5  md:btn-md lg:btn-lg"
            onClick={() => findReturnDate()}
            type="button"
          >
            Find
          </button>
        </label>
        <label className="grid grid-flow-col grid-cols-2 px-8">
          <h1>Actual Return Date :</h1>
          <h1 className="sm:ml-6 mt-1 lg:ml-10 border-1 h-6.5 px-1">{actualreturndate}</h1>
          <button
            className="btn btn-xs sm:btn-sm h-7.5  md:btn-md lg:btn-lg"
            onClick={() => findActualReturnDate()}
            type="button"
          >
            Find
          </button>
        </label>
        <label className="grid grid-flow-col grid-cols-2 px-8">
            <h1>Fine Calculated :</h1>
            <input name='fine' value={formData.fine} className="px-2" onChange={changeHandler} type='text'/>
        </label>
        <label className="grid grid-flow-col grid-cols-2 px-8">
            <h1>Fine Paid :</h1>
            <input name='findPaid' type='checkbox' className="checkbox" checked={formData.findPaid} onChange={changeHandler}/>
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
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={() => navigate('/cancel')}>
            Cancel
          </button>
          <button
            type="submit"
            onClick={()=> navigate('/confirmation')}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Confirm
          </button>
        </div>
      </form>
        </div>
  )
}

export default PayFine