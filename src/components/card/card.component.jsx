import "./card.styles.scss";

export const Card = (props) => {
  return (
    <div className="card">
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2`}/>
      <h1 key={props.monster.id}>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};
