import { useNavigate } from "react-router-dom";
import NewPokemonForm from "../components/pokemon/NewPokemonForm";
import { useState } from "react";

function NewPokemonPage() {
  const navigate = useNavigate();
  const firebaseUrl = process.env.REACT_APP_FIREBASE_URL;

  const [searchedPokemon, setSearchedPokemon] = useState({
    name: "",
    image: "",
    type: "",
    description: "",
  });

  function addPokemonHandler(pokemonData) {
    fetch(firebaseUrl, {
      method: "POST",
      body: JSON.stringify(pokemonData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  function findPokemonHandler(pokemonNameOrId) {
    const pokemonDataUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonNameOrId}`;

    const promises = [fetch(pokemonDataUrl), fetch(pokemonSpeciesUrl)];

    Promise.all(promises)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        console.log(data);

        const pokemonData = data[0];
        const speciesData = data[1];

        console.log(pokemonData);
        console.log(speciesData);

        setSearchedPokemon({
          name: pokemonData.name,
          image: pokemonData.sprites.other["official-artwork"].front_default,
          type: pokemonData.types[0].type.name,
          description: speciesData.flavor_text_entries[0].flavor_text,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section>
      <h1>New Pokemon Page</h1>
      <NewPokemonForm
        searchedPokemon={searchedPokemon}
        onAddPokemon={addPokemonHandler}
        onFindPokemon={findPokemonHandler}
      />
    </section>
  );
}

export default NewPokemonPage;
