// import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import { NavBox, ListItem, Item, BackgroundNavigation, StyledNavLink } from './AppBar.styled';

export default function AppBar() {
  return (
    <BackgroundNavigation>
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
    </BackgroundNavigation>
  );
}
