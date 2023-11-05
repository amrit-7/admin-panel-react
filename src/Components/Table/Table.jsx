/* eslint-disable react/prop-types */
import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { DataGrid, GridToolbar, gridClasses } from "@mui/x-data-grid";
import RemoveModeratorRoundedIcon from "@mui/icons-material/RemoveModeratorRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useNavigate } from "react-router";
import ModalComponent from "../Modal/Modal";
import { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";
const Table = ({ initialrows, initialcolumns, isfor }) => {
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [idToEdit, setIdToEdit] = useState("");
  const [modalDelete, setModalDelete] = useState(false);
  const [modalIsFor, setModalIsFor] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDeleteOpen = () => setModalDelete(true);
  const handleDeleteClose = () => setModalDelete(false);
  const navigate = useNavigate();
  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.odd`]: {
      backgroundColor: theme.palette.table.odd,
    },
  }));
  const handleEdit = (id) => {
    if (isfor == "tutors") {
      navigate(`/tutors/edit/${id}`);
    } else if (isfor == "subjects") {
      setModalIsFor("editSubject");
      setIdToEdit(id);
      handleOpen();
    }
  };
  const handleDelete = (id) => {
    setIdToDelete(id);
    handleDeleteOpen();
  };
  const handleSuspend = (id) => {
    console.log(id);
  };
  const handleSendMail = (id) => {
    console.log(id);
  };
  const actionCol = {
    field: "actions",
    headerName: "Actions",
    width: isfor === "tutors" ? 200 : 150,
    renderCell: (params) => {
      return (
        <>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEdit(params.row.id)}>
              <EditRoundedIcon sx={{ color: "primary.main" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(params.row.id)}>
              <DeleteRoundedIcon sx={{ color: "red.dark" }} />
            </IconButton>
          </Tooltip>
          {isfor === "tutors" ? (
            <>
              <Tooltip title="Suspend">
                <IconButton onClick={() => handleSuspend(params.row.id)}>
                  <RemoveModeratorRoundedIcon sx={{ color: "sidebar.main" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Send Mail">
                <IconButton onClick={() => handleSendMail(params.row.id)}>
                  <SendRoundedIcon sx={{ color: "primary.light" }} />
                </IconButton>
              </Tooltip>
            </>
          ) : null}
        </>
      );
    },
  };

  const ActionInitialColumns = [...initialcolumns, actionCol];
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <StripedDataGrid
        sx={{
          "& .MuiTablePagination-displayedRows": {
            mt: 2,
          },
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        disableDensitySelector
        getRowId={(row) => row.id}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        rows={initialrows}
        columns={
          isfor == "students" || isfor == "options"
            ? initialcolumns
            : ActionInitialColumns
        }
        rowsPerPageOptions={[]}
      />
      <ModalComponent
        open={open}
        onClose={handleClose}
        modalisfor={modalIsFor}
        idtoedit={idToEdit}
      />
      <DeleteModal
        idtodelete={idToDelete}
        open={modalDelete}
        onClose={handleDeleteClose}
        modalisfor={"deleteSubject"}
      />
    </div>
  );
};

export default Table;
