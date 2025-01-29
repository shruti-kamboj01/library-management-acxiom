import React, { useState } from "react";
import { useNavigate } from "react-router";
import BooksList from "../components/reports/BooksList";
import MoviesList from "../components/reports/MoviesList";
import MembershipList from "../components/reports/MembershipList";
import ActiveIssues from "../components/reports/ActiveIssues";
import OverdueReturns from "../components/reports/OverdueReturns";
import IssueReq from "../components/reports/IssueReq";

const Reports = () => {
  const loggedInAs = localStorage.getItem("loggedInAs");
  const navigate = useNavigate();
  const reports = [
    "Master List of Books",
    "Master List of Movies",
    "Master List of Memberships",
    "Active Issues",
    "Overdue returns",
    "Pending Issue Requests",
  ];
  const [reportButton, setReportButton] = useState("");
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-end mt-2">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md"
          onClick={() => navigate(`/${loggedInAs}`)}
        >
          Home
        </button>
      </div>
      <div className="flex flex-col ">
        <h1 className="flex justify-center">Available Reports</h1>
        <div className="flex items-start mt-4">
          <div className="flex flex-col gap-2">
            {reports.map((report, i) => {
              return (
                <button className="btn" onClick={() => setReportButton(report)}>
                  {" "}
                  {report}{" "}
                </button>
              );
            })}
          </div>
          <div className="w-full ml-2">
            {reportButton === "Master List of Books" ? (
              <div>
                {" "}
                <BooksList />{" "}
              </div>
            ) : reportButton === "Master List of Movies" ? (
              <div>
                {" "}
                < MoviesList/>{" "}
              </div>
            ) : reportButton === "Master List of Memberships" ? (
              <div>
                {" "}
                <MembershipList />{" "}
              </div>
            ) : reportButton === "Active Issues" ? (
              <div>
                {" "}
                <ActiveIssues />{" "}
              </div>
            ) : reportButton === "Overdue returns" ? (
              <div>
                {" "}
                <OverdueReturns />{" "}
              </div>
            ) : reportButton === "Pending Issue Requests" ? (
              <div>
                {" "}
                <IssueReq />{" "}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="btn btn-xs sm:btn-sm md:btn-md" onClick={() => navigate("/logout")}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Reports;
