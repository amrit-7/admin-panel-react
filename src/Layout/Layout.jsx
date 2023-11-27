import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
const Layout = () => {
  const currentUser = useSelector((state) => {
    return state.currentUser.data.token;
  });
  return currentUser ? (
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
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
