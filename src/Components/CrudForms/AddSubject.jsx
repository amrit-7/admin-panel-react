/* eslint-disable react/prop-types */
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { useAddNewSubjectMutation } from "../../store";
import { toast } from "react-toastify";
import { useState } from "react";

const AddSubject = (props) => {
  const [subject, setSubject] = useState("");
  const [addSubject, { isLoading }] = useAddNewSubjectMutation();
  const handleSubjectValue = (e) => {
    const title = e.target.value;
    setSubject(title);
  };
  const handleAddNewSubject = async () => {
    if (subject.length > 0) {
      const res = await addSubject(subject);
      if (res.data.success == true) {
        toast.success("New subject added successfully");
        props.close();
      } else if (res.data.success == false) {
        toast.error(res.data.data.title[0]);
      }
    } else {
      toast.error("Please add subject");
    }
  };
  return (
    <>
      <TextField
        label="Subject Name"
        color="primary"
        placeholder="Mathematics"
        onChange={handleSubjectValue}
        focused
      />
      <LoadingButton
        loading={isLoading}
        size="small"
        sx={{ mt: 2, textTransform: "capitalize" }}
        variant="contained"
        onClick={handleAddNewSubject}
      >
        Add Subject
      </LoadingButton>
    </>
  );
};

export default AddSubject;
