import React, { Component } from "react";
import "./App.scss";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    //this can solved with lexical scoping that is using arrow function
    //this.handleOnChangle = this.handleOnChangle.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleOnChangle = (value) => {
    this.setState({ searchField: value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return (
      <div className="App">
        <h1 className="PageTittle">Monster Rolodex</h1>
        <SearchBox
          handleOnChangle={this.handleOnChangle}
          placeholderValue="search monster"
        ></SearchBox>
        <CardList monsters={filterMonster}></CardList>
      </div>
    );
  }
}

export default App;
