import React from "react";

const SearchList = (props) => {
  const { items, search } = props;
  const filteredList = items.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  return (
    <div>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
