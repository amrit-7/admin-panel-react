/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DatePickerComponent from "../DatePicker/DatePickerComponent";
const EditEducation = ({ education }) => {
  return (
    <>
      <Box>
        <Typography sx={{ mt: 4, fontWeight: 500 }} variant="body1">
          Education
        </Typography>
        <Box sx={{ mt: 2 }}>
          {education.map((data, index) => {
            const {
              degree_name,
              institute,
              start_month_formatted,
              start_year,
              end_month_formatted,
              end_year,
            } = data;
            return (
              <Box
                key={index}
                sx={{
                  bgcolor: index % 2 == 0 ? "table.odd" : "white",
                  width: "100%",
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="subtitle">
                  {degree_name}, {institute}({start_month_formatted}{" "}
                  {start_year.toString()}-{end_month_formatted}
                  {end_year})
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Tooltip title="Edit">
                    <IconButton>
                      <EditRoundedIcon sx={{ color: "primary.main" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteRoundedIcon sx={{ color: "red.dark" }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Edit Education/Certification
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Box
              sx={{
                display: { lg: "flex", sm: "block" },
                alignItems: "center",
              }}
            >
              <TextField
                label="Institution name with city"
                variant="outlined"
                placeholder="Enter institution name"
                fullWidth
              />
              <FormControl
                sx={{ ml: { lg: 2 }, mt: { sm: 2, xs: 2, lg: 0 } }}
                fullWidth
              >
                <InputLabel id="demo-simple-select-label">
                  Degree Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Degree Type"
                >
                  <MenuItem value={10}>Bachelors</MenuItem>
                  <MenuItem value={20}>Masters</MenuItem>
                  <MenuItem value={30}>Doctorate</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: { lg: "flex", sm: "block" },
                mt: 2,
                alignItems: "center",
              }}
            >
              <Box sx={{ width: { lg: "50%", sm: "100%" }, mr: { lg: 2 } }}>
                <TextField
                  label="Enter Degree name"
                  variant="outlined"
                  placeholder="Computer Applications"
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  width: { lg: "50%", sm: "100%" },
                  mt: { sm: 2, xs: 2, lg: 0 },
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Association
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Association"
                  >
                    <MenuItem value={10}>Bachelors</MenuItem>
                    <MenuItem value={20}>Masters</MenuItem>
                    <MenuItem value={30}>Doctorate</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ mt: 2, display: { lg: "flex", sm: "block" } }}>
              <Box
                sx={{
                  display: { lg: "flex", sm: "block" },
                  flexDirection: "column",
                  justifyContent: "center",
                  width: { lg: "50%", sm: "100%" },
                }}
              >
                <Typography>Start Date</Typography>
                <DatePickerComponent />
              </Box>
              <Box
                sx={{
                  mt: { lg: 0, sm: 2, xs: 2 },
                  ml: { lg: 2 },
                  display: { lg: "flex", sm: "block" },
                  flexDirection: "column",
                  justifyContent: "center",
                  width: { lg: "50%", sm: "100%" },
                }}
              >
                <Typography>End Date</Typography>
                <DatePickerComponent />
              </Box>
            </Box>
          </Box>
        </Box>
        <Button sx={{ my: 2 }} variant="contained">
          Save
        </Button>
      </Box>
    </>
  );
};

export default EditEducation;
