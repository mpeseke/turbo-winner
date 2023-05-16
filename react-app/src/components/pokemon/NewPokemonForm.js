import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewPokemonForm.module.css";

function NewPokemonForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const typeInputRef = useRef();
  const descriptionInputRef = useRef();

  function sumbitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredType = typeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const pokemonData = {
      name: enteredName,
      image: enteredImage,
      type: enteredType,
      description: enteredDescription,
    };

    props.onAddPokemon(pokemonData);
  }

  function searchPokemonByNameOrId(event) {
    const enteredNameOrId = nameInputRef.current.value;
    props.onFindPokemon(enteredNameOrId.toLowerCase());
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={sumbitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Pokemon name</label>
          <input
            type="text"
            required
            id="name"
            ref={nameInputRef}
            defaultValue={props.searchedPokemon.name}
          />
          <div className={classes.actions}>
            <button onClick={searchPokemonByNameOrId}>Search</button>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Pokemon image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            defaultValue={props.searchedPokemon.image}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="type">Pokemon type</label>
          <input
            type="text"
            required
            id="type"
            ref={typeInputRef}
            defaultValue={props.searchedPokemon.type}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Pokemon description</label>
          <textarea
            required
            id="description"
            ref={descriptionInputRef}
            defaultValue={props.searchedPokemon.description}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Pokemon</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPokemonForm;
