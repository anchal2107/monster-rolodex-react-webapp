import "./card-list.styles.scss";
import "../card/card.component";
import { Card } from "../card/card.component";
export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card monster={monster}></Card>
      ))}
    </div>
  );
};
