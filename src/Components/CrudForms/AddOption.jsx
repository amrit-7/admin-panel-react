/* eslint-disable react/prop-types */
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";
import {
  useAddNewOptionMutation,
  useFetchParentOptionsQuery,
} from "../../store";
const AddOption = ({ close }) => {
  const [addOption, { isLoading: adding }] = useAddNewOptionMutation();
  const { data, error, isLoading } = useFetchParentOptionsQuery();
  const parentOptions = !isLoading && !error && data ? data.data : [];
  const [option, setOption] = useState("");
  const [details, setDetail] = useState("");
  const [parent, setParent] = useState("");
  const handleOptionValue = (e) => {
    const title = e.target.value;
    setOption(title);
  };
  const handleDetailValue = (e) => {
    const title = e.target.value;
    setDetail(title);
  };
  const handleParentChange = (event) => {
    setParent(event.target.value);
  };
  const handleAddOption = async () => {
    if (details.length <= 0) {
      toast.warn("Please add details");
    }
    if (option.length <= 0) {
      toast.warn("Please add category");
    }
    if (parent.length <= 0) {
      toast.warn("Please add category");
    }
    const data = { option, details, parent_id: parent };
    const res = await addOption(data);
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
        onChange={handleOptionValue}
        focused
        fullWidth
      />
      <TextField
        sx={{ mb: 2 }}
        label="Details"
        color="primary"
        placeholder="Details"
        onChange={handleDetailValue}
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Parent</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={parent}
          label="Parent"
          onChange={handleParentChange}
        >
          {parentOptions.map((options) => {
            const { id, option } = options;
            return (
              <MenuItem key={id} value={id}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <LoadingButton
        loading={adding}
        size="small"
        sx={{ mt: 2, textTransform: "capitalize" }}
        variant="contained"
        onClick={handleAddOption}
      >
        Add Option
      </LoadingButton>
    </Box>
  );
};

export default AddOption;
