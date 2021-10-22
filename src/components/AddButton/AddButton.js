import { ButtonStyled } from './AddButton.styled';
import AddIcon from '@mui/icons-material/Add';
import SvgIcon from '@mui/material/SvgIcon';

export default function AddButton() {
  return (
    <>
      <ButtonStyled aria-label="delete">
        <SvgIcon>
          <AddIcon></AddIcon>
        </SvgIcon>
      </ButtonStyled>
    </>
  );
}
