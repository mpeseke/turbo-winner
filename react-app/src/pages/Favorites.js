import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import PokemonList from "../components/pokemon/PokemonList";

function FavoritesPage() {
  const favoritesCxt = useContext(FavoritesContext);

  let content;

  if (favoritesCxt.totalFavorites === 0) {
    content = <p>Add favorite Pokemon to see them here!</p>;
  } else {
    content = <PokemonList pokemon={favoritesCxt.favorites} />;
  }

  return (
    <div>
      <section>
        <h1>Favorites</h1>
        {content}
      </section>
    </div>
  );
}

export default FavoritesPage;
