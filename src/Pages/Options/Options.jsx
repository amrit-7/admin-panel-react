/* eslint-disable no-unused-vars */
import dayjs from "dayjs";
import { useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Table from "../../Components/Table/Table";
import ModalComponent from "../../Components/Modal/Modal";
const Options = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const rows = [
    {
      id: 1,
      col1: "Gender",
      col2: "Gender Option for the tutors",
      col3: "10/1/2023",
    },
    {
      id: 2,
      col1: "Student Type",
      col2: "Type of the student",
      col3: "10/5/2023",
    },
  ];
  const columns = [
    { field: "col1", headerName: "Option", width: 200 },
    { field: "col2", headerName: "Details", width: 200 },
    {
      field: "col3",
      headerName: "Created On",
      width: 200,
      type: "date",
      valueFormatter: (params) => dayjs(params.value).format("DD/MM/YYYY"),
    },
  ];
  return (
    <Box>
      <ModalComponent open={open} onClose={handleClose} isfor={"option"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ color: "sidebar.main" }}>
          Options
        </Typography>
        <Button
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          startIcon={<AddCircleOutline />}
          onClick={handleOpen}
        >
          Add Option
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Table initialcolumns={columns} initialrows={rows} />
      </Box>
    </Box>
  );
};

export default Options;
