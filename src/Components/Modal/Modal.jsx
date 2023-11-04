/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Box, Typography, TextField, IconButton } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import {
  useAddNewSubjectMutation,
  useUpdateSubjectMutation,
} from "../../store";
import { useState } from "react";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
export default function ModalComponent(props) {
  const [addSubject, { isLoading }] = useAddNewSubjectMutation();
  const [updateSubject, { isLoading: updating }] = useUpdateSubjectMutation();
  const [subject, setSubject] = useState("");
  const { modalisfor, idtoedit } = props;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #E0E0E0",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  const handleCloseModal = () => {
    props.onClose();
  };
  const handleSubjectValue = (e) => {
    const title = e.target.value;
    setSubject(title);
  };
  const handleAddNewSubject = async () => {
    if (subject.length > 0) {
      const res = await addSubject(subject);
      if (res.data.success == true) {
        toast.success("New subject added successfully");
        props.onClose();
      } else if (res.data.success == false) {
        toast.error(res.data.data.title[0]);
      }
    } else {
      toast.error("Please add subject");
    }
  };
  const handleEditSubject = async () => {
    const data = { idtoedit, subject };
    const res = await updateSubject(data);
    console.log("🚀 ~ file: Modal.jsx:54 ~ handleEditSubject ~ res:", res);
  };
  return (
    <Modal {...props}>
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <AddCircleOutlineRoundedIcon
              sx={{ fontSize: 30, mr: 2, color: "primary.main" }}
            />
            Add Subject
          </Typography>
          <IconButton onClick={handleCloseModal}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          component={"form"}
          sx={{
            px: 3,
            py: 4,
            my: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {modalisfor === "editSubject" ? (
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
          ) : modalisfor === "subject" ? (
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
          ) : modalisfor === "option" ? (
            <>
              <TextField
                sx={{ mb: 2 }}
                label="Option Name"
                color="primary"
                placeholder="Option"
                onChange={handleSubjectValue}
                focused
              />
              <TextField
                label="Details"
                color="primary"
                placeholder="Details"
                onChange={handleSubjectValue}
              />
              <Button
                size="small"
                sx={{ mt: 2, textTransform: "capitalize" }}
                variant="contained"
              >
                Add Option
              </Button>
            </>
          ) : null}
        </Box>
      </Box>
    </Modal>
  );
}
