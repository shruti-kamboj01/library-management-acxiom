import React, { useState } from "react";
import { useNavigate } from "react-router";

const UpdateBooks = ({ setUpdateBookModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    serialNo: "",
    book: "Book",
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
    localStorage.setItem("updateBook", JSON.stringify(formData));
    setUpdateBookModal(false);
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
            <h1>Add Books/Movies</h1>
            <form
              className="flex flex-col items-center border gap-2 w-full mx-auto"
              onSubmit={submitHandler}
            >
              <div className="flex justify-evenly w-full mt-2">
                <label className="flex gap-1">
                  Books
                  <input
                    type="radio"
                    name="book"
                    value="Book"
                    className="radio"
                    onChange={changeHandler}
                    checked={formData.book === "Book"}
                  />
                </label>
                <label className="flex gap-1">
                  Movies
                  <input
                    type="radio"
                    name="book"
                    value="Movie"
                    className="radio"
                    checked={formData.book === "Movie"}
                    onChange={changeHandler}
                  />
                </label>
              </div>
              <div className="flex flex-col mx-auto items-center gap-3 mt-3 w-full">
                <label className="w-full flex justify-center">
                  <h1 className="ml-2  text-base">Book/Movie Name -</h1>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Type here"
                    className="input w-full mt-2 max-w-xs mr-3"
                    onChange={changeHandler}
                  />
                </label>

                <label className="w-full flex justify-center gap-8">
                  <h1 className=" text-base mt-3">Serial No-</h1>
                  <input
                    type="text"
                    name="serialNo"
                    value={formData.serialNo}
                    placeholder="Type here"
                    className="input mt-1.5 mr-2 w-full max-w-xs"
                    onChange={changeHandler}
                  />
                </label>

                <label className="w-full flex justify-center gap-12">
                  <h1 className="mt-1 text-base">Date-</h1>
                  <input
                    type="Date"
                    name="date"
                    value={formData.date}
                    placeholder="Type here"
                    className="input w-full max-w-xs ml-1"
                    onChange={changeHandler}
                  />
                </label>
              </div>

              <div className="flex gap-2 mb-2">
                <button
                  onClick={() => setUpdateBookModal(false)}
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

export default UpdateBooks;
