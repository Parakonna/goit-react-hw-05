import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const buildCssClasses = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <>
      <header className={css.nav}>
        <NavLink className={buildCssClasses} to="/">
          Home Page
        </NavLink>
        <NavLink className={buildCssClasses} to="/movies">
          Movies Page
        </NavLink>
      </header>
    </>
  );
};

export default Navigation;
