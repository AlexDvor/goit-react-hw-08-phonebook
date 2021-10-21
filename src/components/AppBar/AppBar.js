import { BackgroundAppBar, ContainerBar } from './AppBar.styled';
// import { Container } from '../Container/Container';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

export default function AppBar() {
  return (
    <BackgroundAppBar>
      <ContainerBar>
        <NavigationMenu />
        <UserMenu></UserMenu>
        <AuthNav></AuthNav>
      </ContainerBar>
    </BackgroundAppBar>
  );
}
