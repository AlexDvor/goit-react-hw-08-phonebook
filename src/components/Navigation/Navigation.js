import { Container } from '../Container/Container';
import { NavBox, ListItem, Item, StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <Container>
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
    </Container>
  );
}
