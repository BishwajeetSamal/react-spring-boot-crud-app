import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ViewEmployeeComponent() {
  const { id } = useParams();
  const [employees, setSetEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployeeId(id).then((res) => {
      setSetEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <div>
              <label style={{ width: "13rem" }}>Employee First Name : </label>{" "}
              {employees.firstName}
            </div>
          </div>
          <div className="row">
            <label style={{ width: "13rem" }}>Employee Last Name : </label>{" "}
            {employees.lastName}
          </div>
          <div className="row">
            <label style={{ width: "13rem" }}>Employee EmailId :</label>{" "}
            {employees.emailId}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployeeComponent;
