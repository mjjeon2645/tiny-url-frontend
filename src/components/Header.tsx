import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tiny-url">Tiny URL</NavLink>
          </li>
          <li>
            <NavLink to="/login">로그인</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
