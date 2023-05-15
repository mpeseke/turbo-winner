import Card from "../ui/Card";
import classes from "./ListItem.module.css";

function ListItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h4>Type: {props.type}</h4>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favs</button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
