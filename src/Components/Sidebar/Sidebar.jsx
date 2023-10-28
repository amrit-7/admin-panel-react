import { useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";
import Face4RoundedIcon from "@mui/icons-material/Face4Rounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };
  return (
    <Box className="sidebar col-2 p-0 m-0">
      <div className="titleContainer p-lg-2 d-flex align-items-center">
        <SchoolRoundedIcon fontSize="large" sx={{ color: "white.main" }} />
        <Typography variant="h6" className="ms-2 sideTitleName p-2">
          Admin Panel
        </Typography>
      </div>
      <div className="sideLinksContainer">
        <Box
          className="sideLink d-flex align-items-center px-lg-4 py-lg-3"
          onClick={() => handleNavigate("")}
        >
          <div className="icon me-2">
            <DashboardRoundedIcon />
          </div>
          <Typography
            sx={{ textTransform: "capitalize" }}
            className="linkTitle"
          >
            dashboard
          </Typography>
        </Box>
        <Box
          className="sideLink d-flex align-items-center px-lg-4 py-lg-3"
          onClick={() => handleNavigate("tutors")}
        >
          <div className="icon me-2">
            <Face4RoundedIcon />
          </div>
          <Typography
            sx={{ textTransform: "capitalize" }}
            className="linkTitle"
          >
            tutors
          </Typography>
        </Box>
        <Box
          className="sideLink d-flex align-items-center px-lg-4 py-lg-3"
          onClick={() => handleNavigate("students")}
        >
          <div className="icon me-2">
            <PeopleRoundedIcon />
          </div>
          <Typography
            sx={{ textTransform: "capitalize" }}
            className="linkTitle"
          >
            students
          </Typography>
        </Box>
        <Box
          className="sideLink d-flex align-items-center px-lg-4 py-lg-3"
          onClick={() => handleNavigate("subjects")}
        >
          <div className="icon me-2">
            <AutoStoriesRoundedIcon />
          </div>
          <Typography
            sx={{ textTransform: "capitalize" }}
            className="linkTitle"
          >
            subjects
          </Typography>
        </Box>
        <Box
          className="sideLink d-flex align-items-center px-lg-4 py-lg-3"
          onClick={() => handleNavigate("options")}
        >
          <div className="icon me-2">
            <TuneRoundedIcon />
          </div>
          <Typography
            sx={{ textTransform: "capitalize" }}
            className="linkTitle"
          >
            options
          </Typography>
        </Box>
        <Box className="sideLink d-flex align-items-center px-lg-4 py-lg-3">
          <div className="icon me-2">
            <SettingsRoundedIcon />
          </div>
          <Typography
            sx={{ textTransform: "capitalize" }}
            className="linkTitle"
          >
            settings
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default Sidebar;
