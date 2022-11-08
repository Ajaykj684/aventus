import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const Colors = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState([]);

  // const ref = createRef()

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/get-users").then((res) =>
      setData(res.data.data)
    );
  }, []);

  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }, []);

  const handleDelete = (id) => {
    Axios.post(`http://127.0.0.1:8000/delete-user/${id}/`).then((res) =>
      alert(res.data.msg)
    );
  };

  return (
    <>
      <div className="MainDiv">
        <div className="jumbotron text-center bg-sky">
          <h3>Employees</h3>
        </div>
        <div className="container">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Designation</th>
                <th>Date Joined</th>
                <th>Address</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value) => (
                <tr key={value.id}>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>{value.designation}</td>
                  <td>{value.date_joined}</td>
                  <td>{value.address}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(value.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Colors;
