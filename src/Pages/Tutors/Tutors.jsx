import dayjs from "dayjs";
import { Box, Typography } from "@mui/material";
import Table from "../../Components/Table/Table";
const Tutors = () => {
  const rows = [
    {
      id: 1,
      col1: "Mr John Smith",
      col2: "john@gmail.com",
      col3: "9876543210",
      col4: "10/1/2023",
      col5: "10/27/2023",
    },
    {
      id: 2,
      col1: "Clementine",
      col2: "clementime@gmail.com",
      col3: "9876556789",
      col4: "10/10/2023",
      col5: "10/27/2023",
    },
    {
      id: 3,
      col1: "Naruto",
      col2: "naruto@gmail.com",
      col3: "9876599887",
      col4: "10/10/2023",
      col5: "10/27/2023",
    },
  ];
  const columns = [
    { field: "col1", headerName: "Name", width: 150 },
    { field: "col2", headerName: "Email", width: 200 },
    { field: "col3", headerName: "Phone", width: 200 },
    {
      field: "col4",
      headerName: "Registered On",
      width: 200,
      type: "date",
      valueFormatter: (params) => dayjs(params.value).format("DD/MM/YYYY"),
    },
    {
      field: "col5",
      headerName: "Last Login",
      width: 200,
      type: "date",
      valueFormatter: (params) => dayjs(params.value).format("DD/MM/YYYY"),
    },
  ];
  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{ color: "sidebar.main" }}>
          Tutors
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Table initialcolumns={columns} initialrows={rows} isfor="tutors" />
      </Box>
    </Box>
  );
};
export default Tutors;
