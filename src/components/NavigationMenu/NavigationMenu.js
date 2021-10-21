import { NavBox, ListItem, Item, StyledNavLink } from './NavigationMenu.styled';

export default function NavigationMenu() {
  return (
    <NavBox>
      <ListItem>
        <Item>
          <StyledNavLink exact to="/">
            HOME
          </StyledNavLink>
        </Item>

        <Item>
          <StyledNavLink to="/contacts">CONTACTS</StyledNavLink>
        </Item>
      </ListItem>
    </NavBox>
  );
}
