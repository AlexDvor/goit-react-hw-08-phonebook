import { UserMenuBox } from './UserMenu.styled';
import Button from '@mui/material/Button';

export default function UserMenu() {
  return (
    <UserMenuBox>
      <p>Alex</p>
      <Button
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
