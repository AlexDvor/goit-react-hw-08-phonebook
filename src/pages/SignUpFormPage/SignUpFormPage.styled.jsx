import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledForm = styled.form`
  /* display: flex;
  flex-direction: column;
  width: 250px; */
`;

export const StyledInput = styled(TextField)`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  margin-top: 50px;
  width: 250px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  padding: 40px;
  border: 1px solid #1976d2;
  border-radius: 2%;
`;
// export const StyledInput = styled.input`
//   &:not(:first-child) {
//     margin-top: 15px;
//   }
// `;

// export const StyledButton = styled.button`
//   margin-top: 15px;
// `;
