//import clsx from "clsx";
import { NavLink } from "react-router-dom"


//const buildCssClasses ({ isActive }) => {
  //  clsx(css.link, isActive && css.active);
//}

const Navigation = () => {
    return (<>
        <header>
          <NavLink to="/">HomePage</NavLink>
          <NavLink to="/movies">MoviesPage</NavLink>
        </header>
  </>
  )
}

export default Navigation