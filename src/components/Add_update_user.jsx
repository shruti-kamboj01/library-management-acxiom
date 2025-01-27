import React, { useState } from "react";
import { useNavigate } from "react-router";

const Add_update_user = ({ setModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    status: false,
    admin: false,
    user: "New User",
  });

  const navigateHandler = () => {
    loggedInAs == "admin" ? navigate("/admin") : navigate("/user");
  };

  const changeHandler = (e) => {
   
    const { name, value, checked, type} = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(formData.user === 'Existing User') {
      const existingUserName = formData.name
      if(localStorage.getItem(existingUserName)) {
        localStorage.removeItem(existingUserName)
      }
      localStorage.setItem("newUser", JSON.stringify(formData))
    }
    else {
        localStorage.setItem("newUser", JSON.stringify(formData))
    }
   
    navigate("/");
    
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
            <h1>User Management</h1>
            <form
              className="flex flex-col items-center border gap-2 w-full mx-auto"
              onSubmit={submitHandler}
            >
              <div className="flex justify-evenly w-full mt-2">
                <label className="flex gap-1">
                  New User-
                  <input
                    type="radio"
                    name="user"
                    value= "New User"
                    className="radio"
                    onChange={changeHandler}
                    checked={formData.user === 'New User'}
                  
                  />
                </label>
                <label className="flex gap-1">
                  Existing User-
                  <input
                    type="radio"
                    name="user"
                    value="Existing User"
                    className="radio"
                    checked={formData.user === 'Existing User'}
                    onChange={changeHandler}
                  />
                </label>
              </div>
              <div className="flex flex-col mx-auto items-center gap-3 mt-2 w-full">
                <label className="w-full flex justify-center">
                  <h1 className="mt-1 text-base">Name -</h1>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                    onChange={changeHandler}
                  />
                </label>

                <label className="w-full flex justify-center mr-5">
                  <h1 className="mt-1 text-base">Password-</h1>
                  <input
                    type="text"
                    name="password"
                    value={formData.password}
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                    onChange={changeHandler}
                  />
                </label>
              </div>

              <div className="form-control mx-auto flex mb-2 w-fit">
                <label className="label cursor-pointer gap-3">
                  <span className="label-text text-white">Status</span>
                  <input
                    type="checkbox"
                    name="status"
                    checked={formData.status}
                    className="checkbox"
                    onChange={changeHandler}
                  />
                </label>
              </div>

              <div className="form-control mx-auto flex mb-2 w-fit">
                <label className="label cursor-pointer gap-3">
                  <span className="label-text text-white">Admin</span>
                  <input
                    type="checkbox"
                    name="admin"
                    checked={formData.admin}
                    className="checkbox"
                    onChange={changeHandler}
                  />
                </label>
              </div>

              <div className="flex gap-2 mb-2">
                <button
                  onClick={() => setModal(false)}
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

export default Add_update_user;
