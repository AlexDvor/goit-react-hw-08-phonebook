import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const BackgroundNavigation = styled.div`
  background-color: rgb(25, 118, 210);
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%);
`;

export const NavBox = styled.nav``;

export const ListItem = styled.ul`
  font-size: 15px;
  display: flex;
  list-style: none;
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)({
  color: 'white',
  '&[aria-current="page"]': {
    color: 'tomato',
  },
});
