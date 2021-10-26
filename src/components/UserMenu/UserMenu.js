import { UserMenuBox } from './UserMenu.styled';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../../redux/Auth/Auth-operations';
import { getUsername } from '../../redux/Auth/Auth-selector';

export default function UserMenu() {
  const userName = useSelector(getUsername);
  const dispatch = useDispatch();
  return (
    <UserMenuBox>
      <p>{userName}</p>
      <Button
        onClick={() => dispatch(authOperations.logOut())}
        variant="contained"
        size="small"
        sx={{
          height: '30px',
          marginLeft: '20px',
          padding: '10px',
        }}
      >
        LogOut
      </Button>
    </UserMenuBox>
  );
}
