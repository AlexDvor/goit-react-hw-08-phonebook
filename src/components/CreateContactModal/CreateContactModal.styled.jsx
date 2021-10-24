import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';

export const ButtonStyled = styled(IconButton)`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 15px;
  right: 10px;
  background-color: #1db636;
  color: white;
  border-radius: 50%;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgb(25, 118, 210);
  }
`;
