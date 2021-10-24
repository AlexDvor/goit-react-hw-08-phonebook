import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
export const StyledInput = styled.input`
  &:not(:first-child) {
    margin-top: 15px;
  }
`;

export const StyledButton = styled.button`
  margin-top: 15px;
`;
