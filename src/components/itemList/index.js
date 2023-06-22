function ItemList({ itemList, setItemList }) {
  function handleChecked(id) {
    const refreshList = itemList.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItemList(refreshList);
  }

  return (
    <ul className=" pt-4 ">
      {itemList.map((event) => (
        <li key={event.item}>
          <input
            className="mr-4"
            type="checkbox"
            onChange={() => handleChecked(event.id)}
          />
          {event.item}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
