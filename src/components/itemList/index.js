import ItemListLi from "../ItemListLi";

function ItemList({ itemList, setItemList, filter }) {
  function handleChecked(id) {
    const refreshList = itemList.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItemList(refreshList);
  }

  return (
    <ul className=" pt-4 ">
      {itemList.map((element) => {
        if (filter === "ALL") {
          return <ItemListLi handleChecked={handleChecked} element={element} />;
        }
        return filter === "ACTIVE" ? (
          !element.checked || element.checked === null ? (
            <ItemListLi handleChecked={handleChecked} element={element} />
          ) : null
        ) : element.checked ? (
          <ItemListLi handleChecked={handleChecked} element={element} />
        ) : null;
      })}
    </ul>
  );
}

export default ItemList;
