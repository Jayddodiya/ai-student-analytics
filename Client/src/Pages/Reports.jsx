import React from "react";
import "../css/Reports.css";

const reports = [
  {
    date: "20 May 2026",
    type: "Weekly Report",
    status: "Completed",
  },
  {
    date: "15 May 2026",
    type: "Monthly Report",
    status: "Completed",
  },
  {
    date: "10 May 2026",
    type: "AI Summary Report",
    status: "Pending",
  },
];

function Reports() {
  return (
    <div className="reports">

      {/* Header */}
      <div className="reports_header">

        <h1>Reports & Exports</h1>

      </div>

      {/* Report Cards */}
      <div className="report_cards">

        <div className="report_card">

          <h3>📄 Weekly Report</h3>

          <button>
            Download PDF
          </button>

        </div>

        <div className="report_card">

          <h3>📊 Monthly Report</h3>

          <button>
            Download CSV
          </button>

        </div>

        <div className="report_card">

          <h3>🤖 AI Summary Report</h3>

          <button>
            View Insights
          </button>

        </div>

      </div>

      {/* Table */}
      <div className="table_container">

        <table>

          <thead>

            <tr>
              <th>Date</th>
              <th>Report Type</th>
              <th>Status</th>
              <th>Download</th>
            </tr>

          </thead>

          <tbody>

            {reports.map((report, index) => (
              <tr key={index}>

                <td>{report.date}</td>

                <td>{report.type}</td>

                <td>
                  <span
                    className={
                      report.status === "Completed"
                        ? "completed"
                        : "pending"
                    }
                  >
                    {report.status}
                  </span>
                </td>

                <td>
                  <button className="download_btn">
                    Download
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Reports;