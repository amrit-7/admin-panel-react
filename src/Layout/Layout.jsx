import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Box } from "@mui/material";
const Layout = () => {
  return (
    <Box maxWidth="xl" sx={{ m: 0, p: 0 }}>
      <Box className="row p-0 m-0">
        <Sidebar />
        <Box className="mainContent col-lg-10 m-0 p-0">
          <Navbar />
          <Box
            className="container-fluid pt-2 mt-2"
            sx={{ maxHeight: "90vh", overflowY: "auto" }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
