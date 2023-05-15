import { useState, useEffect } from "react";

import PokemonList from "../components/pokemon/PokemonList";

function AllPokemonPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPokemon, setLoadedPokemon] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-pkmn-list-default-rtdb.firebaseio.com/pokemon.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pokemonArr = [];

        for (const key in data) {
          const pokemon = {
            id: key,
            ...data[key],
          };

          pokemonArr.push(pokemon);
        }

        setIsLoading(false);
        setLoadedPokemon(pokemonArr);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Pokemon</h1>
      <PokemonList pokemon={loadedPokemon} />
    </div>
  );
}

export default AllPokemonPage;
