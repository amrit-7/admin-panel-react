import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Box>
        <Box>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Hello <strong> Username</strong> welcome to the Admin Dashboard
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </Box>
      </Box>
      <div className="row">
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-header">Tutors</div>
            <div className="card-body">
              <h5 className="card-title">5 Tutors in total</h5>
              <p className="card-text">Check and manage Tutors</p>
              <a href="/tutors" className="btn btn-dark">
                See Tutors
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-header">Students</div>
            <div className="card-body">
              <h5 className="card-title">106 Students in total</h5>
              <p className="card-text">Check and manage Students</p>
              <a href="/students" className="btn btn-dark">
                See Students
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
