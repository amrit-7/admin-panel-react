/* eslint-disable no-unused-vars */
import dayjs from "dayjs";
import { useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Table from "../../Components/Table/Table";
import ModalComponent from "../../Components/Modal/Modal";
import { useFetchAllOptionsQuery } from "../../store";
import TableSkeleton from "../../Components/Skeleton/TableSkeleton";
const Options = () => {
  const { data, error, isLoading } = useFetchAllOptionsQuery();
  const options = !isLoading && !error && data ? data.data : [];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { field: "option", headerName: "Option", width: 200 },
    { field: "details", headerName: "Details", width: 200 },
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
      <ModalComponent open={open} onClose={handleClose} modalisfor={"option"} />
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
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <Table
            initialcolumns={columns}
            initialrows={options}
            isfor={"options"}
          />
        )}
      </Box>
    </Box>
  );
};

export default Options;
