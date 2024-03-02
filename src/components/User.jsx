import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { deleteUser } from "../apis/userApis";
import Dialog from "./Dialog";

const User = ({ name, bio, image, age }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleDialogCancel = () => setIsOpen(false);
  const handleDelete = () => {
    deleteUser(name).then(() => {
      alert("User deleted");
      setIsOpen(false);
    });
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        title="Confirmation Required"
        body="Do you really want to delete this user"
        actions={
          <>
            <Button onClick={handleDialogCancel}>Cancel</Button>
            <Button onClick={handleDelete}>Yes</Button>
          </>
        }
      ></Dialog>

      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton>
            <DeleteIcon onClick={() => setIsOpen(true)} />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar alt={name} src={image} />
        </ListItemAvatar>
        <ListItemText primary={`${name} - ${age}`} secondary={bio} />
      </ListItem>
    </>
  );
};

export default User;
