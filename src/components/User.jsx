import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { deleteUser } from "../apis/userApis";
import useConfirmation from "../hooks/useConfirmation";

const User = ({ name, bio, image, age }) => {
  const [confirm, confirmationDialog] = useConfirmation();

  const handleDelete = () => {
    confirm(() =>
      deleteUser(name).then(() => {
        alert("User deleted");
      })
    );
  };

  return (
    <>
      {confirmationDialog}
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton>
            <DeleteIcon onClick={handleDelete} />
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
