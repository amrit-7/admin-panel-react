import { Box, Skeleton } from "@mui/material";

const TableSkeleton = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{ borderRadius: "6px" }}
          width={"30%"}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{ borderRadius: "6px" }}
          width={"20%"}
        />
      </Box>
      {Array.from(new Array(5)).map((_, index) => {
        return (
          <Box key={index} sx={{ mt: 1 }}>
            <Skeleton animation="wave" variant="rectangular" height={"40px"} />
          </Box>
        );
      })}
    </Box>
  );
};

export default TableSkeleton;
