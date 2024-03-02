import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Dialog({ open, onClose, title, body, actions }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <MuiDialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {body}
          </DialogContentText>
        </DialogContent>
        {actions && <DialogActions>{actions}</DialogActions>}
      </MuiDialog>
    </>
  );
}
