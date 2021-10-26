import { BackgroundAppBar, ContainerBar } from './AppBar.styled';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
// import { getUsername } from '../../redux/Auth/Auth-selector';

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
