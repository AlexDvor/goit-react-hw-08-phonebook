import { useState } from 'react';
import { ButtonStyled, BoxContent, Style } from './CreateContactModal.styled';
import CreateContactForm from '../CreateContactForm/CreateContactForm';
//@mui
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

export default function AddButton() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <BoxContent sx={Style}>
            <CreateContactForm />
          </BoxContent>
        </Fade>
      </Modal>

      <ButtonStyled onClick={() => setOpen(!false)}>
        <AddIcon></AddIcon>
      </ButtonStyled>
    </>
  );
}
