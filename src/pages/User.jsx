import React from 'react'
import { useNavigate } from "react-router";

const User = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-y-3 w-11/12 mt-2">
      <div className="flex justify-between">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Home page
        </button>
        <h1>Home Page </h1>
        <button
          onClick={() => navigate("/")}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          Back{" "}
        </button>
      </div>
      <div className="flex justify-evenly">
        
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        onClick={() => navigate("/reports")}
        >
          Reports
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        onClick={() => navigate("/transactions")}
        >
          Transactions
        </button>
      </div>

      <h1 className="mx-auto flex justify-center">Product Details</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Code No From</th>
              <th>Code No To</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>SC(B/M)000001</td>
              <td>SC(B/M)000004</td>
              <td>Science</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <td>EC(B/M)000001</td>
              <td>EC(B/M)000004</td>
              <td>Economics</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>FC(B/M)000001</td>
              <td>FC(B/M)000004</td>
              <td>Fiction</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      onClick={() => navigate('/logout')}
      >
          Log Out
        </button>
      </div>
     
    </div>
  );
}

export default User