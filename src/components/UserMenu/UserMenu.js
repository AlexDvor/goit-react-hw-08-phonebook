import { UserMenuBox } from './UserMenu.styled';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/Auth/Auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  return (
    <UserMenuBox>
      <p>Alex</p>
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
