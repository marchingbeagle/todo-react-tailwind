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
        switch (filter) {
          case "ACTIVE":
            return (
              (!element.checked || element.checked === null) && (
                <ItemListLi
                  key={element.id}
                  handleChecked={handleChecked}
                  element={element}
                />
              )
            );
          case "COMPLETED":
            return (
              element.checked && (
                <ItemListLi
                  key={element.id}
                  handleChecked={handleChecked}
                  element={element}
                />
              )
            );
          default:
            return (
              <ItemListLi
                key={element.id}
                handleChecked={handleChecked}
                element={element}
              />
            );
        }
      })}
    </ul>
  );
}

export default ItemList;
