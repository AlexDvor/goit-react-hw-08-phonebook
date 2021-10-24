import { ButtonStyled } from './Modal.styled';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CreateContactForm from '../CreateContactForm/CreateContactForm';
//
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

export default function AddButton() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <ButtonStyled onClick={() => setOpen(!false)}>
        <AddIcon></AddIcon>
      </ButtonStyled>

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
          <Box sx={style}>
            <CreateContactForm />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
