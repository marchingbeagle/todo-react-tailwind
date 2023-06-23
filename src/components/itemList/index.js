function ItemList({ itemList, setItemList, filter }) {
  function handleChecked(id) {
    const refreshList = itemList.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItemList(refreshList);
  }

  return (
    <ul className=" pt-4 ">
      {itemList.map((event) => {
        if (filter === "ALL") {
          return (
            <li key={event.item}>
              <input
                className="mr-4"
                type="checkbox"
                onChange={() => handleChecked(event.id)}
                checked={event.checked || false}
              />
              {event.item}
            </li>
          );
        }
        return filter === "ACTIVE" ? (
          !event.checked || event.checked === null ? (
            <li key={event.item}>
              <input
                className="mr-4"
                type="checkbox"
                onChange={() => handleChecked(event.id)}
                checked={event.checked || false}
              />
              {event.item}
            </li>
          ) : null
        ) : event.checked ? (
          <li key={event.item}>
            <input
              className="mr-4"
              type="checkbox"
              onChange={() => handleChecked(event.id)}
              checked={event.checked}
            />
            {event.item}
          </li>
        ) : null;
      })}
    </ul>
  );
}

export default ItemList;
