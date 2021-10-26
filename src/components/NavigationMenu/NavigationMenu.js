import { NavBox, ListItem, Item, StyledNavLink } from './NavigationMenu.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/Auth/Auth-selector';

export default function NavigationMenu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <NavBox>
      <ListItem>
        <Item>
          <StyledNavLink exact to="/">
            HOME
          </StyledNavLink>
        </Item>
        {isLoggedIn && (
          <Item>
            <StyledNavLink to="/contacts">CONTACTS</StyledNavLink>
          </Item>
        )}
      </ListItem>
    </NavBox>
  );
}
