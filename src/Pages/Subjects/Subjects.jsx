/* eslint-disable no-unused-vars */
import dayjs from "dayjs";
import { useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Table from "../../Components/Table/Table";
import ModalComponent from "../../Components/Modal/Modal";

const Subjects = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const rows = [
    {
      id: 1,
      col1: "Maths",
      col2: "Admin1",
      col3: "10/1/2023",
    },
    {
      id: 2,
      col1: "Sceince",
      col2: "Admin2",
      col3: "10/5/2023",
    },
    {
      id: 3,
      col1: "English",
      col2: "Admin1",
      col3: "10/10/2023",
    },
    {
      id: 4,
      col1: "Computer",
      col2: "Admin3",
      col3: "10/20/2023",
    },
    {
      id: 5,
      col1: "Biolody",
      col2: "Admin2",
      col3: "10/26/2023",
    },
  ];
  const columns = [
    { field: "col1", headerName: "Name", width: 200 },
    { field: "col2", headerName: "Created by", width: 200 },
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
      <ModalComponent open={open} onClose={handleClose} isfor={"subject"} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "sidebar.main" }}>
          Subjects
        </Typography>
        <Button
          sx={{ textTransform: "capitalize" }}
          onClick={handleOpen}
          variant="contained"
          startIcon={<AddCircleOutline />}
        >
          Add Subject
        </Button>
      </Box>
      <Box sx={{ my: 3 }}>
        <Table initialcolumns={columns} initialrows={rows} />
      </Box>
    </Box>
  );
};

export default Subjects;
