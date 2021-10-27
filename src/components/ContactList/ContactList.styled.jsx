import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  width: 670px;
`;
export const ListItems = styled.ul``;
export const Item = styled.li`
  margin-top: 20px;
  display: flex;
  align-items: center;
  outline: 1px solid black;
  padding: 13px;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgb(37 50 56 / 10%);
  justify-content: space-between;
  transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.01);
  }
`;
export const HeadingTitleBox = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  padding: 13px;
  border-radius: 10px;
  background-color: rgb(73, 151, 230);
  color: white;
`;
export const ButtonStyled = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const UserIconBox = styled.div``;
export const Name = styled.div``;
export const Phone = styled.div``;
