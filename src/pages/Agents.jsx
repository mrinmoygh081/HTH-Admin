import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Table from "../components/table/Table";
import LoadingView from "../components/LoadingView";
import { getAPI } from "../apis/";
import { BASE_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { loadTourAgentsReq } from "../redux/actions";
import { toast } from "react-toastify";

// import CreatableSelect from "react-select/creatable";
// import makeAnimated from "react-select/animated";

const approveAgentHandler = (item) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`${BASE_URL}/admin/approveAgent/${item?.id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log("result", result);
      // console.log("item", item);
      if (result.status) {
        toast("The tour agent has been approved.");
      } else {
        toast("Something went wrong");
      }
    })
    .catch((error) => {
      console.log("error", error);
      toast("Something went wrong");
    });
};

const tableHead = [
  "Name",
  "Email",
  "Phone",
  "Business Name",
  "Address",
  "Status",
  "Actions(Approve)",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item?.name}</td>
    <td>{item?.phone}</td>
    <td>{item?.email}</td>
    <td>{item?.businessName}</td>
    <td>{item?.address}</td>
    <td>{item?.approveStatus === 0 ? "Pending" : "Approved"}</td>
    <td className="actionTable">
      <button
        title="Approve Tour Agents"
        onClick={() => approveAgentHandler(item)}
      >
        <i className="bx bx-check-square"></i>
      </button>
    </td>
  </tr>
);

const Agents = () => {
  const dispatch = useDispatch();
  const { loginToken } = useSelector((state) => state.authReducer);
  const agentsReq = useSelector((state) => state.agentsReducer);

  useEffect(() => {
    (async () => {
      let data = await getAPI(`${BASE_URL}/admin/getRegisterReq`, loginToken);
      if (data.status === 1) {
        dispatch(loadTourAgentsReq(data.message?.data.reverse()));
      }
    })();
  }, [loginToken, dispatch]);

  return (
    <section>
      <h2 className="page-header">Tour Agents</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div className="topnav">
                <div className="topnav__search">
                  <input type="text" placeholder="Search here..." />
                  <i className="bx bx-search"></i>
                </div>
                <div className="topnav__action">
                  <Link to="/add-agent" className="submit-button">
                    ADD NEW AGENT
                  </Link>
                </div>
              </div>
              {!agentsReq ? (
                <LoadingView />
              ) : (
                <Table
                  limit="10"
                  headData={tableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={agentsReq}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
