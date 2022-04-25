import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEmployee() {
  const navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    EmployeeService.getEmployeeId(id).then((resp) => {
      let employee = resp.data;
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setEmailId(employee.emailId);
    });
  }, []);

  function updateEmployees(e) {
    e.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    console.log("employee=>" + JSON.stringify(employee));
    EmployeeService.updateEmployee(employee, id).then((res) => {
      navigate("/ListEmployeeComponent");
    });
  }
  return (
    <div>
      <h1>Update Employee</h1>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 ">
            <h3 className="text-center">Update Employee</h3>
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
                  <button className="btn btn-success" onClick={updateEmployees}>
                    Update
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

export default UpdateEmployee;
