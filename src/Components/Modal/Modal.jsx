/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Box, Typography, TextField, IconButton } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
export default function ModalComponent(props) {
  const { isfor } = props;
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
    console.log(e.target.value);
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
          {isfor === "subject" ? (
            <>
              <TextField
                label="Subject Name"
                color="primary"
                placeholder="Mathematics"
                onChange={handleSubjectValue}
                focused
              />
              <Button
                size="small"
                sx={{ mt: 2, textTransform: "capitalize" }}
                variant="contained"
              >
                Add Subject
              </Button>
            </>
          ) : isfor === "option" ? (
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
