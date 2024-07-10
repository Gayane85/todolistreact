import React from "react";

class Lists extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = { isToggleOn: true };
  }

  handelClick = (index) => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.item.map((item, index) => (
            <li key={index} style={{ paddingTop: "10px" }}>
              {item}
              <button
                onClick={this.handelClick}
                // onClick={this.props.handelClick}
                style={{ color: "blue", marginLeft: "10px" }}
              >
                {/* {this.props.isToggleOn ? "Do" : "Done"} */}
                {this.state.isToggleOn ? "Do" : "Done"}
              </button>

              <button
                onClick={this.props.deleteTask}
                style={{ color: "blue", marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lists;
