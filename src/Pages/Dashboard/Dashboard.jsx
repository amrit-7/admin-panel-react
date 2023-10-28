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
            <div className="card-header">Admins</div>
            <div className="card-body">
              <h5 className="card-title">5 Admins in total</h5>
              <p className="card-text">Check and manage admins</p>
              <a href="/admin/list" className="btn btn-dark">
                See Admins
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-header">Users</div>
            <div className="card-body">
              <h5 className="card-title">106 Users in total</h5>
              <p className="card-text">Check and manage users</p>
              <a href="#" className="btn btn-dark">
                See Users
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
