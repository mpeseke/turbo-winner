import { useNavigate } from "react-router-dom";
import NewPokemonForm from "../components/pokemon/NewPokemonForm";

function NewPokemonPage() {
  const navigate = useNavigate();
  const firebaseUrl = process.env.REACT_APP_FIREBASE_URL;

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

  return (
    <section>
      <h1>New Pokemon Page</h1>
      <NewPokemonForm onAddPokemon={addPokemonHandler} />
    </section>
  );
}

export default NewPokemonPage;
