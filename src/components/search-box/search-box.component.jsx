import "./search-box.styles.scss";
export const SearchBox = (props) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder={props.placeholderValue}
        onChange={(e) => {
            props.handleOnChangle(e.target.value);
        }}
      ></input>
    </div>
  );
};
