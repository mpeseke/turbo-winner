import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCxt = useContext(FavoritesContext);

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
            <Link to="/favorites">
              Favorite Pokemon{" "}
              <span className={classes.badge}>
                {favoritesCxt.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
