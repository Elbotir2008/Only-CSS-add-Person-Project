import React, { Component } from "react";

export class AddStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false,
    };
  }

  render() {
    return (
      <div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        />
        <div className="container py-3">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              id="search"
              name="search"
              placeholder="Search..."
            />
            <select
              className="form-select"
              style={{ maxWidth: "100%" }}
              name="filter"
              id="filter"
            >
              <option value="all">All</option>
              <option value="N14">React N14</option>
              <option value="N10">React N10</option>
              <option value="N32">React N32</option>
            </select>
            <button
              className="btn btn-success"
              id="btn-add"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add student
            </button>
          </div>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Group</th>
                <th scope="col">Does work?</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody id="students-data"></tbody>
          </table>
          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add student
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form id="student-form">
                    <label className="form-label" for="firstName">
                      Firstname
                    </label>
                    <input
                      className="form-control mb-3"
                      type="text"
                      id="firstName"
                      name="firstName"
                    />
                    <label className="form-label" for="lastName">
                      Lastname
                    </label>
                    <input
                      className="form-control mb-3"
                      type="text"
                      id="lastName"
                      name="lastName"
                    />
                    <select
                      className="form-select mb-3"
                      style={{ maxWidth: "15" }}
                      name="group"
                      id="group"
                    >
                      <option value="N14">React N14</option>
                      <option value="N10">React N10</option>
                      <option value="N32">React N32</option>
                    </select>
                    <input type="checkbox" id="doesWork" name="doesWork" />
                    <label for="doesWork">Does work?</label>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    id="btn-save"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddStudents;
