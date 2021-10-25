import { useState } from 'react';
import { ButtonStyled, BoxContent, Style } from './ContactModal.styled';
import CreateContactForm from '../CreateContactForm/CreateContactForm';
//@mui
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

export default function ContactModal() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={showModal}>
          <BoxContent sx={Style}>
            <CreateContactForm setShowModal={setShowModal} />
          </BoxContent>
        </Fade>
      </Modal>

      <ButtonStyled onClick={() => setShowModal(!false)}>
        <AddIcon></AddIcon>
      </ButtonStyled>
    </>
  );
}
