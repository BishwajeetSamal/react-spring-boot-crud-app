import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ListEmployeeComponent() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  function editEmployee(id) {
    navigate(`/UpdateEmployee/${id}`);
  }

  function deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((resp) => {
      setEmployees(employees.filter((employee) => employee.id != id));
    });
  }

  function viewEmployee(id) {
    navigate(`/ViewEmployeeComponent/${id}`);
  }

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Employees List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Employee First Name</th>
              <th> Employee Last Name</th>
              <th> Employee Email Id</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td> {emp.firstName}</td>
                  <td> {emp.lastName}</td>
                  <td> {emp.emailId}</td>
                  <td>
                    <button
                      onClick={() => editEmployee(emp.id)}
                      className="btn btn-info me-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteEmployee(emp.id)}
                      className="btn btn-danger me-2"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => viewEmployee(emp.id)}
                      className="btn btn-success "
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
