/* eslint-disable no-unused-vars */
import dayjs from "dayjs";
import { useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Table from "../../Components/Table/Table";
import ModalComponent from "../../Components/Modal/Modal";
import { useFetchAllSubjectsQuery } from "../../store";
import TableSkeleton from "../../Components/Skeleton/TableSkeleton";

const Subjects = () => {
  const { data, error, isLoading } = useFetchAllSubjectsQuery();
  const subjects = !error && !isLoading && data ? data.data : [];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const columns = [
    { field: "title", headerName: "Name", width: 200 },
    { field: "added_by", headerName: "Created by", width: 200 },
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
      <ModalComponent
        open={open}
        onClose={handleClose}
        modalisfor={"subject"}
      />
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
        {subjects.length > 0 ? (
          <Table
            initialcolumns={columns}
            initialrows={subjects}
            isfor={"subjects"}
          />
        ) : (
          <TableSkeleton />
        )}
      </Box>
    </Box>
  );
};

export default Subjects;
