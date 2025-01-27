import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddMembership = ({ setAddMembershipModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactName: "",
    aadharNumber: "",
    address: "",
    startDate: "",
    endDate: "",
    Membership: "",
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
    localStorage.setItem("addMembership", JSON.stringify(formData));
    navigate("/admin");
  };

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/logout");
  };
  return (
    <div className="w-11/12 mx-auto">
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
            <h1>Add Membership</h1>
            <form
              className="flex flex-col items-center border gap-2 w-full mx-auto"
              onSubmit={submitHandler}
            >
              <div className="flex flex-col mx-auto items-center gap-3 mt-2 w-full">
                <label className="w-full flex justify-center">
                  <h1 className="mt-1 text-base">First Name -</h1>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                    onChange={changeHandler}
                  />
                </label>

                <label className="w-full flex justify-center ">
                  <h1 className="mt-1 text-base">Last Name -</h1>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Type here"
                    className="input w-full max-w-xs ml-1.5"
                    onChange={changeHandler}
                  />
                </label>

                <label className="w-full flex justify-center">
                  <h1 className="mt-1 text-base">Contact Name-</h1>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                    onChange={changeHandler}
                  />
                </label>

                <label className="w-full flex justify-center mr-5">
                  <h1 className="mt-1 text-base">Contact Add-</h1>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    placeholder="Type here"
                    className="input w-full max-w-xs ml-2"
                    onChange={changeHandler}
                  />
                </label>
                <label className="w-full flex justify-center mr-5">
                  <h1 className="mt-1 text-base">Aadhar No-</h1>
                  <input
                    type="text"
                    name="aadharNumber"
                    value={formData.aadharNumber}
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
                    name="Membership"
                    value="six months"
                    className="radio"
                    onChange={changeHandler}
                    checked={formData.Membership === "six months"}
                  />
                </label>
                <label className="flex gap-1">
                  One Year
                  <input
                    type="radio"
                    name="Membership"
                    value="One Year"
                    className="radio"
                    checked={formData.Membership === "One Year"}
                    onChange={changeHandler}
                  />
                </label>
                <label className="flex gap-1">
                  Two Years
                  <input
                    type="radio"
                    name="Membership"
                    value="Two Years"
                    className="radio"
                    onChange={changeHandler}
                    checked={formData.Membership === "Two Years"}
                  />
                </label>
              </div>

              <div className="flex gap-2 mb-2">
                <button
                  onClick={() => setAddMembershipModal(false)}
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

export default AddMembership;
