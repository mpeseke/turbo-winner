import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Pokemon Finder</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Pokemon</Link>
          </li>
          <li>
            <Link to="/new-pokemon">Add a Pokemon</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite Pokemon</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
