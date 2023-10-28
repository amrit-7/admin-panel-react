import { Box, Button, TextField, Typography } from "@mui/material";
import DatePickerComponent from "../DatePicker/DatePickerComponent";

const EditExperience = () => {
  return (
    <>
      <Box>
        <Typography sx={{ mt: 4, fontWeight: 500 }} variant="body1">
          Experience
        </Typography>
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
