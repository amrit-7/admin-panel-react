import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
const EditAddress = () => {
  const address = "Amritsar, Jalandhar Division, Punjab, India, 143001";
  return (
    <>
      <Box sx={{ mt: 6, width: { lg: "50%", md: "100%" } }}>
        <Typography sx={{ mt: 4, fontWeight: 500 }} variant="body1">
          Address
        </Typography>
        <Box>
          <Box sx={{ display: "flex", my: 2 }}>
            <Typography sx={{ fontWeight: 600 }}>{address}</Typography>
            <EditRoundedIcon color="primary" sx={{ ml: 2 }} />
          </Box>
          <Typography
            component={"div"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            Address
            <Typography variant="caption" sx={{ color: "primary.main" }}>
              (publicly visible)
            </Typography>
          </Typography>
          <Alert sx={{ mt: 2 }} severity="info">
            This is address is publicly visible. PLease give you local
            area/society so students know the appropriate location.
          </Alert>
          <TextField
            sx={{ mt: 2 }}
            label="Location"
            placeholder="Enter Location"
            fullWidth
            helperText="Tip: Be as local as you can"
          />
          <Button
            sx={{ my: 2, textTransform: "capitalize" }}
            variant="contained"
          >
            Add Address
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditAddress;
