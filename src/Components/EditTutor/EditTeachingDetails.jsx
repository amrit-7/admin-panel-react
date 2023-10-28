import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const EditTeachingDetails = () => {
  const [value, setValue] = useState("yes");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const radioOptions = [
    "Are you willing to travel to student?",
    "Available for online teaching?",
    "Do you have digital pen?",
    "Do you help with homework and assignments?",
    "Are you currently a fulltime teacher employed by a School/College?",
  ];

  return (
    <>
      <Box>
        <Typography sx={{ mt: 4, fontWeight: 500 }} variant="body1">
          Experience
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Fee in INR-Indian Rupee
        </Typography>
        <Box sx={{ display: { lg: "flex" }, alignItems: "center", mt: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              mr: { lg: 2 },
            }}
          >
            <Typography variant="caption">I charge</Typography>
            <FormControl sx={{ mt: 1 }} fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Degree Type"
              >
                <MenuItem value={10}>Monthly</MenuItem>
                <MenuItem value={20}>Weekly</MenuItem>
                <MenuItem value={30}>Daily</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              mr: { lg: 2 },
            }}
          >
            <Typography variant="caption">Minimum Fee</Typography>
            <TextField sx={{ mt: 1 }} label="Maximum Fee" placeholder="3000" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Typography variant="caption">I charge</Typography>
            <TextField sx={{ mt: 1 }} label="Maximum Fee" placeholder="5000" />
          </Box>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="body2">
            Fee Details (details how fee can vary)
          </Typography>
          <TextField
            multiline
            rows={4}
            maxRows={4}
            placeholder="Enter Fee details"
            fullWidth
            sx={{ mt: 1 }}
          />
        </Box>
        <Box sx={{ display: { lg: "flex" }, alignItems: "center", mt: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              mr: { lg: 2 },
            }}
          >
            <Typography variant="caption">
              Years of total experience (teaching and other)
            </Typography>
            <TextField
              label="Years of experience"
              placeholder="2"
              sx={{ mt: 1 }}
              fullWidth
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              mr: { lg: 2 },
            }}
          >
            <Typography variant="caption">
              Years of teaching experience (Offline + Online)
            </Typography>
            <TextField
              sx={{ mt: 1 }}
              label="Teaching Experience"
              placeholder="2"
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Typography variant="caption">
              Year of online teaching experience
            </Typography>
            <TextField
              sx={{ mt: 1 }}
              label="Online Teaching Experience"
              placeholder="1"
            />
          </Box>
        </Box>
        {radioOptions.map((option, index) => {
          return (
            <Box sx={{ my: 2 }} key={index}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  {option}
                </FormLabel>
                <RadioGroup
                  row
                  value={value}
                  onChange={() => {
                    handleChange(index);
                  }}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Box>
          );
        })}
        <Box>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Opportunities you are interested in
          </Typography>
          <FormControl sx={{ mt: 1 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Duration</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Duration"
            >
              <MenuItem value={10}>Full-time</MenuItem>
              <MenuItem value={20}>Half-time</MenuItem>
              <MenuItem value={30}>Both full-time and half-time</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button sx={{ my: 2, textTransform: "capitalize" }} variant="contained">
          Save
        </Button>
      </Box>
    </>
  );
};

export default EditTeachingDetails;
