import dayjs from "dayjs";
import { Box, Typography } from "@mui/material";
import Table from "../../Components/Table/Table";
import { useFetchAllTutorsQuery } from "../../store/apis/tutorapi";
import TableSkeleton from "../../Components/Skeleton/TableSkeleton";
const Tutors = () => {
  const { data, error, isLoading } = useFetchAllTutorsQuery();
  console.log("🚀 ~ file: Tutors.jsx:8 ~ Tutors ~ data:", data);
  const allTutors = !isLoading && !error && data ? data.data : [];
  const columns = [
    { field: "first_name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 200 },
    {
      field: "last_login",
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
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <Table
            initialcolumns={columns}
            initialrows={allTutors}
            isfor="tutors"
          />
        )}
      </Box>
    </Box>
  );
};
export default Tutors;
