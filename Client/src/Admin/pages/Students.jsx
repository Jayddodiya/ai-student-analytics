import React, { useState } from "react";
import "../css/Students.css";

const students = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/40?img=1",
    name: "Jay Patel",
    email: "jay@gmail.com",
    college: "LDRP",
    rating: 1650,
    solved: 320,
    status: "Active",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/40?img=2",
    name: "Meet Shah",
    email: "meet@gmail.com",
    college: "Nirma",
    rating: 1720,
    solved: 410,
    status: "Inactive",
  },
];

function Students() {
    const [showModal, setShowModal] = useState(false);

const [selectedStudent, setSelectedStudent] =
  useState(null);
  return (
    <div className="students">

      {/* Header */}
      <div className="students_header">

        <h1>Manage Students</h1>

        {/* Action Buttons */}
        <div className="header_buttons">

          <button>Add Student</button>

          <button>Export CSV</button>

          <button>Download Report</button>

        </div>

      </div>

      {/* Search & Filters */}
      <div className="students_filters">

        {/* Search */}
        <input
          type="text"
          placeholder="Search students..."
          className="search_input"
        />

        {/* Filters */}
        <select>
          <option>College Filter</option>
          <option>LDRP</option>
          <option>Nirma</option>
        </select>

        <select>
          <option>Rating Filter</option>
          <option>1500+</option>
          <option>1700+</option>
        </select>

        <select>
          <option>Active Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      {/* Table */}
      <div className="students_table_container">

        <table>

          <thead>

            <tr>

              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>College</th>
              <th>Rating</th>
              <th>Solved</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr key={student.id}>

                <td>
                  <img
                    src={student.avatar}
                    alt=""
                    className="student_avatar"
                  />
                </td>

                <td>{student.name}</td>

                <td>{student.email}</td>

                <td>{student.college}</td>

                <td>{student.rating}</td>

                <td>{student.solved}</td>

                <td>
                  <span
                    className={
                      student.status === "Active"
                        ? "active_status"
                        : "inactive_status"
                    }
                  >
                    {student.status}
                  </span>
                </td>

                <td>

                  <div className="action_buttons">

                    <button className="view_btn"  onClick={() => {
    setSelectedStudent(student);
    setShowModal(true);
  }}>
                      View
                    </button>

                    <button className="edit_btn">
                      Edit
                    </button>

                    <button className="delete_btn">
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
{/* Modal */}

{showModal && (

  <div className="modal_overlay">

    <div className="modal_box">

      {/* Close */}

      <button
        className="close_btn"
        onClick={() => setShowModal(false)}
      >
        ✖
      </button>

      {/* Profile */}

      <img
        src={selectedStudent.avatar}
        alt=""
        className="modal_avatar"
      />

      <h2>{selectedStudent.name}</h2>

      <p>{selectedStudent.email}</p>

      <p>{selectedStudent.college}</p>

      <div className="modal_info">

        <div>
          <h4>Rating</h4>

          <p>{selectedStudent.rating}</p>
        </div>

        <div>
          <h4>Solved</h4>

          <p>{selectedStudent.solved}</p>
        </div>

        <div>
          <h4>Status</h4>

          <p>{selectedStudent.status}</p>
        </div>

      </div>

    </div>

  </div>

)}
    </div>
  );
}

export default Students;