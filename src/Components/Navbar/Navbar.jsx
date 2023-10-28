import MailIcon from "@mui/icons-material/Mail";
import { Badge, Box, IconButton, Link } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary p-lg-2 shadow-sm">
      <div className="container-fluid">
        {/* <!-- Div visible in mobile size --> */}
        <div className="mobileDiv p-2">
          <i
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            className="fa-solid fa-bars fa-lg"
          ></i>
          <span className="ms-2">Admin Dashboard</span>
          {/* <!-- Offcanvas --> */}
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Admin Dashboard
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body p-0">
              <div className="offcanvasLinks">
                <ul className="list-group">
                  <li className="list-group-item">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-light" type="submit">
                        Search
                      </button>
                    </form>
                  </li>
                  <li className="list-group-item">Dashboard</li>
                  <li className="list-group-item">Admin</li>
                  <li className="list-group-item">Users</li>
                  <li className="list-group-item">Profile</li>
                  <li className="list-group-item">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Desktop size topbar --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              ml: "auto",
            }}
          >
            <IconButton size="large" sx={{ color: "sidebar.main" }}>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" sx={{ color: "sidebar.main" }}>
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <ul className="navbar-nav  mb-2 mb-lg-0 pe-3">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <AccountCircleRoundedIcon
                  sx={{ fontSize: 28, color: "sidebar.main", mr: 1 }}
                />
                <span className="loggedUserName">Username</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <form action="/admin/logout" method="post">
                    <button
                      className="dropdown-item"
                      role="button"
                      type="submit"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
