// import { Link } from 'react-router-dom';
import { AuthNavBox, StyledLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavBox>
      <StyledLink exact to="/signup">
        SignUp
      </StyledLink>
      <StyledLink exact to="/login">
        LogIn
      </StyledLink>
    </AuthNavBox>
  );
}
