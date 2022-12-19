import React, { useState } from "react";
import { postAPI } from "../apis";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";

const AddAgents = () => {
  const [agent, setAgent] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    address: "",
    designation: "agent",
  });

  const handleTourAgent = () => {
    const isEmpty = Object.values(agent).some((x) => x === null || x === "");
    // console.log("isEmpty", isEmpty);
    if (isEmpty) {
      toast("Please fill out all the fields.");
    } else {
      (async () => {
        let data = await postAPI(
          JSON.stringify(agent),
          `${BASE_URL}/agent/register`,
          null
        );
        if (data.status === 1) {
          toast("Tour agent added successfully.");
        } else {
          toast(
            "Mobile Or Email or Both are already added. Try to change the number and phone!"
          );
        }
      })();
    }
  };

  return (
    <>
      <section>
        <div className="container-fluid">
          <h2 className="page-header text-center">Add New Agent</h2>
          <form id="survey-form">
            <div className="row justify-content-center">
              {/* tour agent add  */}
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label id="name" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter name"
                    required
                    value={agent.name}
                    onChange={(e) =>
                      setAgent({ ...agent, name: e.target.value })
                    }
                  />
                  {agent?.name.trim().length === 0 &&
                    "Name field cann't be empty"}
                </div>
                <div className="form-group">
                  <label id="email" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                    value={agent.email}
                    onChange={(e) =>
                      setAgent({ ...agent, email: e.target.value })
                    }
                  />
                  {agent?.email.trim().length === 0 &&
                    "Email field cann't be empty"}
                </div>
                <div className="form-group">
                  <label id="mobile" htmlFor="mobile">
                    Mobile
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    className="form-control"
                    placeholder="Enter mobile"
                    required
                    value={agent.phone}
                    onChange={(e) =>
                      setAgent({ ...agent, phone: e.target.value })
                    }
                  />
                  {agent?.phone.trim().length === 0 &&
                    "Mobile field cann't be empty"}
                </div>
                <div className="form-group">
                  <label id="businessName" htmlFor="businessName">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="businessName"
                    className="form-control"
                    placeholder="Enter name"
                    required
                    value={agent.businessName}
                    onChange={(e) =>
                      setAgent({ ...agent, businessName: e.target.value })
                    }
                  />
                  {agent?.businessName.trim().length === 0 &&
                    "Business Name cann't be empty"}
                </div>
                <div className="form-group">
                  <label id="address" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="address"
                    className="form-control"
                    placeholder="Enter name"
                    required
                    value={agent.address}
                    onChange={(e) =>
                      setAgent({ ...agent, address: e.target.value })
                    }
                  />
                  {agent?.address.trim().length === 0 &&
                    "Adress cann't be empty"}
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <button
                    type="button"
                    id="submit"
                    className="submit-button m-auto"
                    onClick={() => handleTourAgent()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddAgents;
