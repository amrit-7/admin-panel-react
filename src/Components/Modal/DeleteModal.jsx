/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Box, Typography, IconButton } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { useDeleteSubjectMutation } from "../../store";
export default function DeleteModal(props) {
  const [deleteSubject, { isLoading }] = useDeleteSubjectMutation();
  const { idtodelete, modalisfor } = props;
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
  const handleDelete = async () => {
    const res = await deleteSubject(idtodelete);
    if (res.data.success == true) {
      props.onClose();
      toast.success("Subject Deleted Successfully");
    } else {
      toast.error("Error while deleting subject");
    }
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
            Delete ?
          </Typography>
          <IconButton onClick={handleCloseModal}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          component={"form"}
          sx={{
            px: 3,
            my: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            textAlign: "center",
          }}
        >
          {modalisfor === "deleteSubject" ? (
            <>
              <Typography>Sure you want to delete subject ?</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 4,
                }}
              >
                <LoadingButton
                  variant="contained"
                  loading={isLoading}
                  sx={{ mr: 3 }}
                  onClick={handleDelete}
                >
                  Delete
                </LoadingButton>
                <Button variant="outlined" onClick={handleCloseModal}>
                  Cancel
                </Button>
              </Box>
            </>
          ) : null}
        </Box>
      </Box>
    </Modal>
  );
}
