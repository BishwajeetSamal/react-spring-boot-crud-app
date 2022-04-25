import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  function ChangeFirstName(e) {
    setFirstName(e.target.value);
  }

  function ChangeLastName(e) {
    setLastName(e.target.value);
  }

  function ChangeEmailId(e) {
    setEmailId(e.target.value);
  }

  function saveEmployees(e) {
    e.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    console.log("employee=>" + JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then((res) => {
      navigate("/ListEmployeeComponent");
    });
  }
  return (
    <div>
      <h1>Employee Form</h1>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 ">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstname"
                    className="form-control"
                    value={firstName}
                    onChange={ChangeFirstName}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="lastname"
                    className="form-control"
                    value={lastName}
                    onChange={ChangeLastName}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={ChangeEmailId}
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button className="btn btn-success" onClick={saveEmployees}>
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "4px" }}
                    type="reset"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
