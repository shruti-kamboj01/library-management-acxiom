import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Logout from "./pages/Logout";
import Maintenance from "./pages/Maintenance";
import Reports from "./pages/Reports";
import Transactions from "./pages/Transactions";
import Cancel from "./pages/Cancel";
import Confirmation from "./pages/Confirmation";

function App() {
  const books = [
    {
      BookName: "The Great Gatsby",
      AuthorName: "F. Scott Fitzgerald",
      SerialNumber: "001-1",
      SelectToIssue: false,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "The Great Gatsby",
      AuthorName: "F. Scott Fitzgerald",
      SerialNumber: "001-2",
      SelectToIssue: false,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "To Kill a Mockingbird",
      AuthorName: "Harper Lee",
      SerialNumber: "002-1",
      SelectToIssue: true,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "To Kill a Mockingbird",
      AuthorName: "Harper Lee",
      SerialNumber: "002-2",
      SelectToIssue: true,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "1984",
      AuthorName: "George Orwell",
      SerialNumber: "003-1",
      SelectToIssue: false,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "1984",
      AuthorName: "George Orwell",
      SerialNumber: "003-2",
      SelectToIssue: false,
      Available: "No",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "Pride and Prejudice",
      AuthorName: "Jane Austen",
      SerialNumber: "004-1",
      SelectToIssue: true,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "Pride and Prejudice",
      AuthorName: "Jane Austen",
      SerialNumber: "004-2",
      SelectToIssue: false,
      Available: "No",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "Moby Dick",
      AuthorName: "Herman Melville",
      SerialNumber: "005-1",
      SelectToIssue: false,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "Moby Dick",
      AuthorName: "Herman Melville",
      SerialNumber: "005-2",
      SelectToIssue: false,
      Available: "No",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "War and Peace",
      AuthorName: "Leo Tolstoy",
      SerialNumber: "006-1",
      SelectToIssue: true,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "War and Peace",
      AuthorName: "Leo Tolstoy",
      SerialNumber: "006-2",
      SelectToIssue: true,
      Available: "No",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "The Catcher in the Rye",
      AuthorName: "J.D. Salinger",
      SerialNumber: "007-1",
      SelectToIssue: false,
      Available: "Yes",
      IssueDate: "",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "The Catcher in the Rye",
      AuthorName: "J.D. Salinger",
      SerialNumber: "007-2",
      SelectToIssue: false,
      Available: "No",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "The Hobbit",
      AuthorName: "J.R.R. Tolkien",
      SerialNumber: "008-1",
      SelectToIssue: true,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "The Hobbit",
      AuthorName: "J.R.R. Tolkien",
      SerialNumber: "008-2",
      SelectToIssue: true,
      Available: "No",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "Brave New World",
      AuthorName: "Aldous Huxley",
      SerialNumber: "009-1",
      SelectToIssue: false,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "Brave New World",
      AuthorName: "Aldous Huxley",
      SerialNumber: "009-2",
      SelectToIssue: false,
      Available: "No",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "The Odyssey",
      AuthorName: "Homer",
      SerialNumber: "010-1",
      SelectToIssue: true,
      Available: "Yes",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
    {
      BookName: "The Odyssey",
      AuthorName: "Homer",
      SerialNumber: "010-2",
      SelectToIssue: true,
      Available: "No",
      IssueDate:"",
      ReturnDate:"",
      ActualReturnDate:""
    },
  ];

  const users = [
    { name: "Shruti", password: "password123", role: "admin" },
    { name: "Aryan", password: "securePass456", role: "user" },
    { name: "Mamta", password: "Pass789", role: "admin" },
    { name: "Khushi", password: "StrongPass", role: "user" },
  ];

  if (!localStorage.getItem("books")) {
    localStorage.setItem("books", JSON.stringify(books));
  }
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
