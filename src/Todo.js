import React from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import SearchList from "./SearchList";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid blue",
  width: "400px",
  margin: "auto",
  padding: "30px",
  fontFamily: "sans-serif",
  gap: "20px",
};
class Todo extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      itemName: "",
      list: [],

      search: "",
      status: "All",
    };
  }

  onChange = (e) => {
    this.setState({
      itemName: e.target.value,
    });
  };

  onAddBtnClick = () => {
    const newItem = {
      id: uuidv4(),
      name: this.state.itemName,
      done: false,
      isLine: false,
      status: "All",
    };

    if (this.state.itemName.trim() !== "") {
      this.setState({
        itemName: "",
        list: [...this.state.list, newItem],
      });
    }
  };

  onToggleListItem = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id !== id) {
          return item;
        } else {
          return {
            ...item,
            done: !item.done,
            isLine: !item.isLine,
          };
        }
      }),
    });
  };

  onDeleteListItem = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };

  updateTodoList = (s) => {
    let copyList = this.state.list;

    if (s === "All") {
      this.setState({
        list: [...this.state.list],
      });
    } else if (s === "Active") {
      this.setState({
        list: copyList.filter((item) => item.done === false),
      });
    } else if (s === "Completed") {
      this.setState({
        list: copyList.filter((item) => item.done === true),
      });
    }
  };

  // updateTodoListAll = (s) => {
  //   this.setState({
  //     status: "All",
  //     list: [...this.state.list],
  //   });
  // };
  // updateTodoListActive = (s) => {
  //   const newListActiv = [...this.state.list];
  //   this.setState({
  //     status: "Active",
  //     list: newListActiv.filter((item) => item.done === false),
  //   });
  // };

  // updateTodoListComplete = (s) => {
  //   const newListComp = [...this.state.list];
  //   this.setState({
  //     status: "Completed",
  //     list: newListComp.filter((item) => item.done === true),
  //   });
  // };

  onSearchItem = (e) => {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  };

  onSearchItemClick = () => {
    // this.setState({
    //   search: this.state.search.toLowerCase(),
    // });
    const { list, search } = this.state;
    const searchResults = list.filter((item) =>
      item.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    this.setState({ searchResults });
  };

  render() {
    const { itemName, search } = this.state;

    return (
      <div style={wrapperStyle}>
        <h1 style={{ color: "blue", textAlign: "center" }}>Todo Lists</h1>
        <input
          value={itemName}
          onChange={this.onChange}
          placeholder="Input your task..."
        />

        <button
          onClick={this.onAddBtnClick}
          style={{ color: "blue", marginLeft: "10px" }}
        >
          Add
        </button>
        <div>
          <input
            value={search}
            onChange={this.onSearchItem}
            placeholder="Search your task..."
          />
          <button onClick={this.onSearchItemClick}>Search</button>
        </div>

        <SearchList items={this.state.list} search={this.state.search} />
        <List
          items={this.state.list}
          toggleItem={this.onToggleListItem}
          deleteItem={this.onDeleteListItem}
        />

        <div>
          {/* <button onClick={() => this.updateTodoListAll("All")}>All</button>
          <button onClick={() => this.updateTodoListActive("Active")}>
            Active
          </button>
          <button onClick={() => this.updateTodoListComplete("Completed")}>
            Completed
          </button> */}
          <button onClick={() => this.updateTodoList("All")}>All</button>
          <button onClick={() => this.updateTodoList("Active")}>Active</button>
          <button onClick={() => this.updateTodoList("Completed")}>
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
