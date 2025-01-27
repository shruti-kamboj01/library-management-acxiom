import React, { useState } from "react";
import { useNavigate } from "react-router";

const UpdateMembership = ({ setupdateMembershipModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    membershipNo: "",
    startDate: "",
    endDate: "",
    membershipExtn: "",
    membershipRemove: "",
  });

  const navigateHandler = () => {
    loggedInAs == "admin" ? navigate("/admin") : navigate("/user");
  };

  const changeHandler = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (localStorage.getItem(formData.membershipNo)) {
      localStorage.setItem("updateMembership", JSON.stringify(formData));
    } else {
      alert("Membership does not exist");
    }
    setupdateMembershipModal(false);
  };

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/logout");
  };
  return (
    <div className="">
      <dialog
        id="my_modal_5"
        className="modal modal-open modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <div className="flex justify-end ">
            <button
              onClick={navigateHandler}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Home
            </button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h1>Update Membership</h1>
            <form
              className="flex flex-col items-center border gap-2 w-full mx-auto"
              onSubmit={submitHandler}
            >
              <div className="flex flex-col mx-auto items-center gap-3 mt-2 w-full">
                <label className="w-full flex justify-center">
                  <h1 className="mt-1 text-base">Membership No -</h1>
                  <input
                    type="text"
                    name="membershipNo"
                    value={formData.membershipNo}
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                    onChange={changeHandler}
                  />
                </label>
                <label className="w-full flex justify-center">
                  <h1 className="mt-1 text-base">Start Date -</h1>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                    onChange={changeHandler}
                  />
                </label>

                <label className="w-full flex justify-center mr-5">
                  <h1 className="mt-1 text-base">End Date -</h1>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                    onChange={changeHandler}
                  />
                </label>
              </div>
              <div className="flex justify-evenly w-full mt-2">
                <label className="flex gap-1">
                  Six months
                  <input
                    type="radio"
                    name="membershipExtn"
                    value="six months"
                    className="radio"
                    onChange={changeHandler}
                    checked={formData.membershipExtn === "six months"}
                  />
                </label>
                <label className="flex gap-1">
                  One Year
                  <input
                    type="radio"
                    name="membershipExtn"
                    value="One Year"
                    className="radio"
                    checked={formData.membershipExtn === "One Year"}
                    onChange={changeHandler}
                  />
                </label>
                <label className="flex gap-1">
                  Two Years
                  <input
                    type="radio"
                    name="membershipExtn"
                    value="Two Years"
                    className="radio"
                    onChange={changeHandler}
                    checked={formData.membershipExtn === "Two Years"}
                  />
                </label>
              </div>
              <label className="flex gap-1">
                Membership Remove
                <input
                  type="radio"
                  name="membershipRemove"
                  value="membershipRemove"
                  className="radio"
                  onChange={changeHandler}
                  checked={formData.membershipRemove === "membershipRemove"}
                />
              </label>

              <div className="flex gap-2 mb-2">
                <button
                  onClick={() => setupdateMembershipModal(false)}
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  type="submit"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-end mt-2">
            <button
              onClick={logoutHandler}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Log Out
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateMembership;
