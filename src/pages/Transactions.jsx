import React, { useState } from "react";
import { Book_availability } from "../components/BookAvailability";
import { useNavigate } from "react-router";
import BookIssue from "../components/BookIssue";

const Transactions = () => {
  const navigate = useNavigate();
  const books = JSON.parse(localStorage.getItem("books"));
  let available_books = new Set();
  let available_authors = new Set();
  books.forEach((book) => {
    available_books.add(book.BookName);
    available_authors.add(book.AuthorName);
  });
  available_books = Array.from(available_books);
  available_authors = Array.from(available_authors);

  const transaction_buttons = {
    check_available: "Is book available ?",
    issue_book: "Issue book ?",
    return_book: "Return book ?",
    pay_fine: "Pay fine ?",
  };
  const transactions = Object.keys(transaction_buttons);
  const [selected_transaction, set_transaction] = useState("check_available");

  const loggedInAs = localStorage.getItem("loggedInAs");

  const navigateHandler = () => {
    loggedInAs == "admin" ? navigate("/admin") : navigate("/user");
  };

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/logout");
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="mx-auto flex justify-center text-lg font-semibold py-4">Transactions</h1>
      <div className="flex justify-end mb-4">
        <button onClick={navigateHandler} className="btn">
          Home
        </button>
      </div>
      <div className="flex">
        <div className="flex px-4 flex-col w-44 space-y-2">
          {transactions.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  set_transaction(item);
                }}
                className="btn"
              >
                {transaction_buttons[item]}
              </button>
            );
          })}
        </div>
        <div className="w-[80%] pr-8">
          {selected_transaction == "check_available" ? (
            <Book_availability
              books={books}
              available_authors={available_authors}
              available_books={available_books}
            />
          ) : (
            <div className="w-[95%] pr-8">
            {selected_transaction == "issue_book" ? (
              <BookIssue
                books={books}
                available_authors={available_authors}
                // available_books={available_books}
              />
            ) : (
              <br />
            )}
          </div>
          )}
        </div>
      
      </div>

      <div className="flex justify-end">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={logoutHandler}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Transactions;
