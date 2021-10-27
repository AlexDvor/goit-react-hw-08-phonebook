import { BackgroundAppBar, ContainerBar } from './AppBar.styled';
import { useSelector } from 'react-redux';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { getIsLoggedIn } from '../../redux/Auth/Auth-selector';
import Filter from '../Filter/Filter';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <BackgroundAppBar>
      <ContainerBar>
        <NavigationMenu />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <Filter />
      </ContainerBar>
    </BackgroundAppBar>
  );
}
