import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink exact to="/register">
        Регистрация
      </NavLink>
      <NavLink exact to="/login">
        Логин
      </NavLink>
    </div>
  );
}
