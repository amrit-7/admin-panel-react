/* eslint-disable react/prop-types */
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUpdateSubjectMutation } from "../../store";

const EditSubject = ({ idtoedit, close }) => {
  const [subject, setSubject] = useState("");
  const [updateSubject, { isLoading: updating }] = useUpdateSubjectMutation();
  const handleSubjectValue = (e) => {
    const title = e.target.value;
    setSubject(title);
  };
  const handleEditSubject = async () => {
    if (subject.length > 0) {
      const data = { idtoedit, subject };
      const res = await updateSubject(data);
      if (res.data.success == true) {
        toast.success("Subject Edited Successfully");
        close();
      } else {
        toast.error("Error while updating subject");
      }
    } else {
      toast.error("Please add subject name");
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
        loading={updating}
        size="small"
        sx={{ mt: 2, textTransform: "capitalize" }}
        variant="contained"
        onClick={handleEditSubject}
      >
        Edit Subject
      </LoadingButton>
    </>
  );
};

export default EditSubject;
