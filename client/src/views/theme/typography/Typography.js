import React, { useState, useEffect } from "react";
import axios from "axios";

const Typography = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const Application = async (e) => {
    e.preventDefault();
    console.log(e.target.photo.value);
    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.phone.value === "" ||
      e.target.designation.value === "" ||
      e.target.address.value === "" ||
      e.target.photo.value === ""
    ) {
      setErrorMessage("invalid! please fill all fields!");
    } else {
      let response = await axios
        .post("http://127.0.0.1:8000/add-user/", {
          address: e.target.address.value,
          email: e.target.email.value,
          name: e.target.name.value,
          phone: e.target.phone.value,
          designation: e.target.designation.value,
          photo: e.target.photo.value,
        })
        .then((response) => {
          console.log("here");
          alert(response.data.msg);
        });
    }
  };

  return (
    <div className="section-center">
      <div className="container">
        <div className="row">
          <div className="booking-form">
            <div className="form-header">
              <h2>Add Employee</h2>
            </div>
            {errorMessage && (
              <p className="error text-red-500">{errorMessage}</p>
            )}
            <form onSubmit={Application}>
              <div className="row">
                <div className="col-md-6 pt-3">
                  <div className="form-group">
                    <span className="form-label">Name</span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Name."
                      required
                      name="name"
                      id="name"
                    />
                  </div>
                </div>

                <div className="col-md-6 pt-3">
                  <div className="form-group">
                    <span className="form-label">Email</span>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Email."
                      required
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pt-3">
                  <div className="form-group">
                    <span className="form-label">Phone</span>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Enter Phone."
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="col-md-6 pt-3">
                  <div className="form-group">
                    <span className="form-label">Designation</span>
                    <select
                      className="form-control"
                      required
                      id="designation"
                      name="designation"
                    >
                      <option value="" hidden id="designation">
                        Designation
                      </option>
                      <option>QA Lead</option>
                      <option>Engineer</option>
                      <option>Developer</option>
                      <option>Admin</option>
                      <option>QA tester</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 pt-3">
                  <div className="form-group">
                    <span className="form-label">Address</span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Address."
                      required
                      name="address"
                      id="address"
                    />
                  </div>
                </div>

                <div className="col-md-6 pt-4">
                  <div className="form-group">
                    <span className="form-label">Photo</span>
                    <input type="file" name="photo" id="photo" />
                  </div>
                </div>
              </div>
              <div className="form-btn pt-4 d-flex justify-content-center">
                <button className="submit-btn bg-primary text-white px-5 pl-5">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Typography;
