import { Box, Button, TextField, Typography } from "@mui/material";

const BasicDetails = () => {
  return (
    <>
      <Box>
        <Typography sx={{ mt: 4, fontWeight: 500 }} variant="body1">
          Basic Details
        </Typography>
        <Box sx={{ width: "50%" }}>
          <TextField
            label="Tutor's Name"
            variant="outlined"
            placeholder="Enter Name"
            fullWidth
            sx={{ mt: 3 }}
          />
          <TextField
            label="Tutor's Email"
            variant="outlined"
            placeholder="Enter Email"
            fullWidth
            sx={{ my: 2 }}
          />
          <TextField
            label="Tutor's Phone"
            variant="outlined"
            placeholder="Enter Phone"
            fullWidth
          />
        </Box>
        <Button variant="contained" sx={{ my: 2, textTransform: "capitalize" }}>
          Save
        </Button>
      </Box>
    </>
  );
};

export default BasicDetails;
