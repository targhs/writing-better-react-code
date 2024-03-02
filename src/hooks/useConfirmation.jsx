import Button from "@mui/material/Button";
import { useState } from "react";
import Dialog from "../components/Dialog";

const useConfirmation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onConfirmFn, setOnConfirmFn] = useState();

  const confirm = (onConfirm) => {
    setIsOpen(true);
    setOnConfirmFn(() => onConfirm);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirmFn();
    setIsOpen(false);
  };
  const confirmationDialog = (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      title="Confirmation Required"
      body="Do you really want to delete this user"
      actions={
        <>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Yes</Button>
        </>
      }
    ></Dialog>
  );
  return [confirm, confirmationDialog];
};

export default useConfirmation;
