import ListItem from "./ListItem";
import classes from "./PokemonList.module.css";

function PokemonList(props) {
  return (
    <ul className={classes.list}>
      {props.pokemon.map((pokemon) => (
        <ListItem
          key={pokemon.id}
          id={pokemon.id}
          image={pokemon.image}
          title={pokemon.title}
          type={pokemon.type}
          description={pokemon.description}
        />
      ))}
    </ul>
  );
}

export default PokemonList;
