import React from "react";
import Lists from "./Lists";
import { v4 as uuidv4 } from "uuid";

class InputBtn extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      value: "",
      lists: [],
      // isToggleOn: true,
    };
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  // handelClick = (e) => {
  //   this.setState({
  //     isToggleOn: !this.state.isToggleOn,
  //   });
  //   e.preventDefault();
  // };

  onAddBtnClick = (e) => {
    e.preventDefault();
    // const newItem = {
    //   id: uuidv4(),
    //   value: this.state.lists.value,
    // };

    // this.state.lists.push(newItem);
    if (this.state.value.trim() !== "") {
      this.setState({
        value: "",
        lists: [...this.state.lists, this.state.value],
      });
    }
  };

  onDeleteList = (index) => {
    const newLists = [...this.state.lists];
    newLists.splice(index, 1);
    this.setState({
      lists: newLists,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid blue",
          width: "400px",
          margin: "auto",
          padding: "30px",
          fontFamily: "sans-serif",
          gap: "20px",
        }}
      >
        <h1 style={{ color: "blue", textAlign: "center" }}>Todo Lists</h1>
        <input
          type="text"
          value={value}
          onChange={this.onChange}
          placeholder="Input your task"
        />
        <button
          onClick={this.onAddBtnClick}
          style={{ color: "blue", marginLeft: "10px" }}
        >
          Add
        </button>
        <Lists
          item={this.state.lists}
          isToggleOn={this.state.isToggleOn}
          deleteTask={this.onDeleteList}
          // handelClick={this.handelClick}
        />
      </div>
    );
  }
}

export default InputBtn;
