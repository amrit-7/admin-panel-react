/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Typography } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import TabsComponent from "../TabComponent/TabsComponent";
import AddSubject from "../CrudForms/AddSubject";
import EditSubject from "../CrudForms/EditSubject";
import AddCategory from "../CrudForms/AddCategory";
import AddOption from "../CRUDForms/AddOption";
export default function ModalComponent(props) {
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
            px: 1,
            py: 2,
            my: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {modalisfor === "editSubject" ? (
            <EditSubject idtoedit={idtoedit} close={handleCloseModal} />
          ) : modalisfor === "subject" ? (
            <AddSubject close={handleCloseModal} />
          ) : modalisfor === "option" ? (
            <TabsComponent
              labels={[" Add Category", "Add Option"]}
              components={[
                <AddCategory close={handleCloseModal} key={0} />,
                <AddOption close={handleCloseModal} key={1} />,
              ]}
            />
          ) : null}
        </Box>
      </Box>
    </Modal>
  );
}
