import React from "react";

const List = (props) => {
  const { items, deleteItem, toggleItem } = props;
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            // style={{
            //   paddingTop: "10px",
            //   textDecoration: item.isLine ? "line-through" : "none",
            // }}
            style={
              item.done
                ? { textDecoration: "line-through", paddingTop: "10px" }
                : { textDecoration: "none", paddingTop: "10px" }
            }
          >
            {item.name}

            <button
              onClick={() => toggleItem(item.id)}
              style={{ color: "blue", marginLeft: "10px" }}
            >
              {item.done ? "Done" : "Do"}
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
