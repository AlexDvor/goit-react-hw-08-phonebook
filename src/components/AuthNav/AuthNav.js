// import { Link } from 'react-router-dom';
import { AuthNavBox, StyledLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavBox>
      <StyledLink to="/signup">SignUp</StyledLink>
      <StyledLink to="/login">LogIn</StyledLink>
    </AuthNavBox>
  );
}
