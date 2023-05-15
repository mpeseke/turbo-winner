import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritePokemon) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritePokemon);
    });
  }

  function removeFunctionHandler(pokemonId) {
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
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
