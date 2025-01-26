import React from "react";
import { useNavigate } from "react-router";

const AddUser = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-end ">
        <button
          onClick={() => navigate("/admin")}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          Home
        </button>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1>User Management</h1>
        <div className="flex flex-col items-center border gap-2 w-full mx-auto">
          <div className="flex justify-evenly w-full mt-2">
            <label className="flex gap-1">
              New User-
              <input
                type="radio"
                name="radio-1"
                className="radio"
                defaultChecked
              />
            </label>
            <label className="flex gap-1">
              Existing User-
              <input type="radio" name="radio-1" className="radio" />
            </label>
          </div>
          <div className="flex flex-col mx-auto items-center gap-3 mt-2 w-full">
            <label className="w-full flex justify-center">
              <h1 className="mt-1 text-base">Name -</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs"
              />
            </label>

            <label className="w-full flex justify-center mr-5">
              <h1 className="mt-1 text-base">Password-</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs"
              />
            </label>
          </div>

          <div className="form-control mx-auto flex mb-2 w-fit">
            <label className="label cursor-pointer gap-3">
              <span className="label-text text-white">Admin</span>
              <input type="checkbox" className="checkbox" />
            </label>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => navigate("/cancel")}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => navigate("/confirmation")}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Confirm
            </button>
          </div>

          <div className="flex">
            <button
              onClick={() => navigate("/admin")}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
