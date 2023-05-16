import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritePokemon) => {},
  removeFavorite: (pokemonId) => {},
  pokemonIsFavorite: (pokemonId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritePokemon) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritePokemon);
    });
  }

  function removeFavoriteHandler(pokemonId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((pokemon) => pokemon.id !== pokemonId);
    });
  }

  function pokemonIsFavoriteHandler(pokemonId) {
    return userFavorites.some((pokemon) => pokemon.id === pokemonId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    pokemonIsFavorite: pokemonIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
