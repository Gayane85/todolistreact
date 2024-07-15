import React from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";

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

  render() {
    const { itemName } = this.state;
    return (
      <div style={wrapperStyle}>
        <h1 style={{ color: "blue", textAlign: "center" }}>Todo Lists</h1>
        <input
          value={itemName}
          onChange={this.onChange}
          placeholder="Input your task"
        />
        <button
          onClick={this.onAddBtnClick}
          style={{ color: "blue", marginLeft: "10px" }}
        >
          Add
        </button>
        <List
          items={this.state.list}
          toggleItem={this.onToggleListItem}
          deleteItem={this.onDeleteListItem}
        />
      </div>
    );
  }
}

export default Todo;






import React from "react";

const List = (props) => {
  const { items, deleteItem, toggleItem } = props;
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ paddingTop: "10px" }}>
            {item.name}
            <button
              onClick={() => toggleItem(item.id)}
              style={{ color: "blue", marginLeft: "10px" }}
            >
              {item.done ? "Do" : "Done"}
            </button>

            <button
              onClick={() => deleteItem(item.id)}
              style={{ color: "blue", marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;





updateTodoList = (s) => {
  this.setState({
    todoAll: s,
  });
};
let newList = [];
if (this.state.todoAll === "All") {
  return (newList = this.state.list);
} else if (this.state.todoAll === "Active") {
  return (newList = this.state.list.filter((item) => !item.complete));
} else if (this.state.todoAll === "Complete") {
  return (newList = this.state.list.filter((item) => item.complete));
}

<div>
<button onClick={() => this.updateTodoList("All")}>All</button>
<button onClick={() => this.updateTodoList("Active")}>Active</button>
<button onClick={() => this.updateTodoList("Completed")}>
  Completed
</button>
</div>

let list = [];
if (this.state.todoAll === "All") {
  list = this.state.list;
} else if (this.state.todoAll === "Active") {
  list = this.state.list.filter((listItem) => !listItem.done);
} else if (this.state.tododAll === "Complete") {
  list = this.state.list.filter((listItem) => listItem.done);
}

// updateTodoList = (string) => {
  //   if (this.state.todoAll === "All") {
  //     this.setState({
  //       list: this.state.list,
  //     });
  //   } else if (this.state.todoAll === "Active") {
  //     this.setState({
  //       list: this.state.list.filter((listItem) => !listItem.done),
  //     });
  //   } else if (this.state.tododAll === "Complete") {
  //     this.setState({
  //       list: this.state.list.filter((listItem) => listItem.done),
  //     });
  //   }
  // };

  // // updateTodoListAll = (string) => {
  // //   this.setState({
  // //     todoAll: "All",
  // //     list: this.state.list,
  // //   });
  // // };

  // // updateTodoListActive = (string) => {
  // //   this.setState({
  // //     todoAll: "Active",
  // //     list: this.state.list.filter((item) => !item.done),
  // //   });
  // // };

  // // updateTodoListComplete = (string) => {
  // //   this.setState({
  // //     todoAll: "Complete",
  // //     list: this.state.list.filter((item) => item.done),
  // //   });
  // // };