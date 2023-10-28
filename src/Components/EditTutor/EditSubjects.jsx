import {
  Box,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
const EditSubjects = () => {
  const subjects = [
    {
      name: "Javascript",
      from: "Grade 10",
      to: "Masters/Postgraduate",
    },
    {
      name: "HTML 5 ",
      from: "Beginner",
      to: "Expert",
    },
    {
      name: "AJAX ",
      from: "Grade 12",
      to: "Masters/Postgraduate",
    },
  ];
  return (
    <>
      <Typography sx={{ mt: 4, fontWeight: 500 }} variant="body1">
        Subjects
      </Typography>
      <Box sx={{ mt: 1, display: { sm: "block", md: "block", lg: "flex" } }}>
        <Box
          sx={{ width: { lg: "60%", md: "100%", sm: "100%" }, mr: { lg: 2 } }}
        >
          <Typography variant="body2">Subject Teaching</Typography>
          <Box sx={{ mt: 2 }}>
            {subjects.map((data, index) => {
              const { name, from, to } = data;
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
                    {name} ({from}-{to})
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
        </Box>
        <Box
          sx={{
            width: { lg: "40%", md: "100%", sm: "100%" },
            mt: { xs: 3, sm: 3, md: 3, lg: 0 },
            borderRadius: "10px",
            padding: "15px 20px",
            boxShadow: 2,
          }}
        >
          <Box>
            <Typography variant="body2">Add New Subject</Typography>
            <Typography variant="caption">One subject at a time</Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField label="New Subject" placeholder="React.js" fullWidth />
            </Box>
            <Typography variant="subtitle2" color="primary">
              If not in the options, add a new subject
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, width: "100px", textTransform: "capitalize" }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EditSubjects;
