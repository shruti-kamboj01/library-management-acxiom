import React from "react";

const MembershipList = () => {
  const data = JSON.parse(localStorage.getItem("addMembership"));

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center mb-2">Master List of Memberships</div>
      <div className="overflow-x-auto">
        <table className="table table-xs border-b-2 border-t-2 border-l-2 border-r-2 border-gray-400">
          <thead className="">
            <tr>
              <th className="border-r-2">Membership Id</th>
              <th className="border-r-2">Name of Member</th>
              <th className="border-r-2">Contact Number</th>
              <th className="border-r-2">Contact Address</th>
              <th className="border-r-2">Aadhar Card No</th>
              <th className="border-r-2">Start Date of Membership</th>
              <th className="border-r-2">End Date of Membership</th>
              <th className="border-r-2">Status (Active/Inactive)</th>
              <th>Amount Pending(Fine)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, i) => {
              return (
                <tr key={i}>
                  <td className="border-r-2 border-gray-400">{i}</td>
                  <td className="border-r-2 border-gray-400">
                    {ele.firstName}
                  </td>

                  <td className="border-r-2 border-gray-400">{ele.lastName}</td>
                  <td className="border-r-2 border-gray-400">
                    {ele.contactNumber}
                  </td>
                  <td className="border-r-2 border-gray-400">
                    {ele.aadharNumber}
                  </td>
                  <td className="border-r-2 border-gray-400">
                    {ele.startDate}
                  </td>
                  <td className="border-r-2 border-gray-400">{ele.endDate}</td>
                  <td className="border-r-2 border-gray-400">{ele.status}</td>
                  <td className="border-r-2 border-gray-400">{ele.fine}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembershipList;
