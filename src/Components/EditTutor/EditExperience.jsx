/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import DatePickerComponent from "../DatePicker/DatePickerComponent";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
const EditExperience = ({ experience }) => {
  return (
    <>
      <Box>
        <Typography sx={{ mt: 4, fontWeight: 500 }} variant="body1">
          Experience
        </Typography>
        <Box sx={{ mt: 2 }}>
          {experience.map((data, index) => {
            const {
              designation,
              organization,
              association,
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
                  {designation} ({association}) at {organization} (
                  {start_month_formatted} {start_year.toString()}-
                  {end_month_formatted}
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
        <Box sx={{ my: 2 }}>
          <Box
            sx={{
              display: { lg: "flex", sm: "block" },
              alignItems: "center",
            }}
          >
            <TextField
              label="Organization name with city"
              variant="outlined"
              placeholder="Enter Organization name"
              fullWidth
              sx={{ mr: { lg: 2 }, mb: { sm: 2, xs: 2, lg: 0 } }}
            />
            <TextField
              label="Designation"
              variant="outlined"
              placeholder="Designation"
              fullWidth
              sx={{ mr: { lg: 2 }, mb: { sm: 2, xs: 2, lg: 0 } }}
            />
            <TextField
              label="Association"
              variant="outlined"
              placeholder="Association"
              fullWidth
            />
          </Box>
          <Box>
            <Box sx={{ mt: 3, display: { lg: "flex", sm: "block" } }}>
              <Box
                sx={{
                  display: { lg: "flex", sm: "block" },
                  flexDirection: "column",
                  justifyContent: "center",
                  width: { lg: "50%", sm: "100%" },
                  mr: { lg: 2 },
                }}
              >
                <Typography>Start Date</Typography>
                <DatePickerComponent />
              </Box>
              <Box
                sx={{
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
          <TextField
            sx={{ mt: 3 }}
            label="Job Description"
            multiline
            rows={3}
            maxRows={4}
            fullWidth
            placeholder="Enter Job Description"
          />
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", my: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditExperience;
