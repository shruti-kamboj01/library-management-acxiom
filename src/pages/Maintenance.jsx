import React, { useState } from "react";
import { useNavigate } from "react-router";
import Add_update_user from "../components/Add_update_user";
import AddMembership from "../components/AddMembership";
import UpdateMembership from "../components/UpdateMembership";

const Maintenance = () => {
  const navigate = useNavigate();
  const loggedInAs = localStorage.getItem("loggedInAs");
  const navigateHandler = () => {
    loggedInAs == "admin" ? navigate("/admin") : navigate("/user");
  };
  const [modal, setModal] = useState(false);
  const [AddmembershipModal, setAddMembershipModal] = useState(false);
  const [updatemembershipModal, setupdateMembershipModal] = useState(false);

  return (
    <div className="flex flex-col w-11/12 mx-auto">
      <div className="flex justify-end">
        <button
          onClick={navigateHandler}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          Home
        </button>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-semibold text-xl mb-2 ">Housekeeping</h1>

        <div className="flex justify-evenly border rounded-md w-full">
          <h1 className="text-base font-semibold underline mt-2">
            {" "}
            Membership{" "}
          </h1>
          <div className="flex flex-col gap-2 mt-2 mb-2">
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              onClick={() => setAddMembershipModal(true)}
            >
              Add
            </button>
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              onClick={() => setupdateMembershipModal(true)}
            >
              Update
            </button>
          </div>
        </div>
        <div className="flex justify-evenly border rounded-md w-full">
          <h1 className="text-base font-semibold underline mt-2">
            Books/Movies{" "}
          </h1>
          <div className="flex flex-col gap-2 mt-2 mb-2">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Add
            </button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Update
            </button>
          </div>
        </div>
        <div className="flex justify-evenly border rounded-md w-full">
          <h1 className="text-base font-semibold underline mt-2">
            {" "}
            User Management{" "}
          </h1>
          <div className="flex flex-col gap-2 mt-2 mb-2">
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              onClick={() => setModal(true)}
            >
              Add
            </button>
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              onClick={() => setModal(true)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      {modal && <Add_update_user modal={modal} setModal={setModal} />}
      {AddmembershipModal && (
        <AddMembership setAddMembershipModal={setAddMembershipModal} />
      )}
      {updatemembershipModal && (
        <UpdateMembership setupdateMembershipModal={setupdateMembershipModal} />
      )}
    </div>
  );
};

export default Maintenance;
