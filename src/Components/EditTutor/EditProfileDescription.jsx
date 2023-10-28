import { Box, Button, TextField, Typography } from "@mui/material";

const EditProfileDescription = () => {
  return (
    <>
      <Typography sx={{ mt: 4, fontWeight: 500 }} variant="body1">
        Profile Description
      </Typography>
      <Box sx={{ my: 2 }}>
        <Typography variant="body2">Do no share contact details</Typography>
        <TextField
          rows={6}
          multiline
          maxRows={15}
          label="Profile Description"
          placeholder="Enter tutor's description"
          fullWidth
          sx={{ mt: 2 }}
        />
      </Box>
      <Button sx={{ my: 2, textTransform: "capitalize" }} variant="contained">
        Save
      </Button>
    </>
  );
};

export default EditProfileDescription;
