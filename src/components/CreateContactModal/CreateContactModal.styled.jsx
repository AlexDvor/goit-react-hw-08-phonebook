import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

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

export const BoxContent = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const Style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
