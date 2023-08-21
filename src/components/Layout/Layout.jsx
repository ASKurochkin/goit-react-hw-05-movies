import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from "./Layout.module.css"

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  
  &.active {
    color: red;
  }
`;

export default function Layout() {
  return (
    <>
      <header>
        <nav className={css.navField}>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
