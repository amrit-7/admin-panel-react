/* eslint-disable react/prop-types */
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { useAddNewCategoryMutation } from "../../store";
import { toast } from "react-toastify";
const AddCategory = ({ close }) => {
  const [addCategory, { isLoading }] = useAddNewCategoryMutation();
  const [category, setCategory] = useState("");
  const [details, setDetail] = useState("");
  const handleCategoryValue = (e) => {
    const title = e.target.value;
    setCategory(title);
  };
  const handleDetailValue = (e) => {
    const title = e.target.value;
    setDetail(title);
  };
  const handleAddCategory = async () => {
    if (details.length <= 0) {
      toast.warn("Please add details");
    }
    if (category.length <= 0) {
      toast.warn("Please add category");
    }
    const data = { details, option: category };
    const res = await addCategory(data);
    if (res.data.success == true) {
      toast.success("Category Added Successfully");
      close();
    } else {
      toast.error("Error while adding category");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
      }}
    >
      <TextField
        sx={{ mb: 2 }}
        label="Category Name"
        color="primary"
        placeholder="Category"
        onChange={handleCategoryValue}
        focused
        fullWidth
      />
      <TextField
        label="Details"
        color="primary"
        placeholder="Details"
        onChange={handleDetailValue}
        fullWidth
      />
      <LoadingButton
        loading={isLoading}
        size="small"
        sx={{ mt: 2, textTransform: "capitalize" }}
        variant="contained"
        onClick={handleAddCategory}
      >
        Add Option
      </LoadingButton>
    </Box>
  );
};

export default AddCategory;
