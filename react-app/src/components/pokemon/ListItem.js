import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./ListItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function ListItem(props) {
  const favoritesCxt = useContext(FavoritesContext);
  const pokemonIsFavorite = favoritesCxt.pokemonIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (pokemonIsFavorite) {
      favoritesCxt.removeFavorite(props.id);
    } else {
      favoritesCxt.addFavorite({
        id: props.id,
        name: props.name,
        description: props.description,
        image: props.image,
        type: props.type,
      });
    }
  }

  function parse(input) {
    if (typeof input === "string") {
      return input.charAt(0).toUpperCase() + input.slice(1);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>

        <div className={classes.content}>
          <h3>{parse(props.name)}</h3>
          <h4>Type: {props.type}</h4>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {pokemonIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
