import ItemListLi from "../ItemListLi";

export default function ItemList({ itemList, setItemList, filter }) {
  function refreshList(id) {
    setItemList(
      itemList.map((item) => {
        return item.id === id ? { ...item, checked: !item.checked } : item;
      })
    );
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
                  refreshList={refreshList}
                  element={element}
                />
              )
            );
          case "COMPLETED":
            return (
              element.checked && (
                <ItemListLi
                  key={element.id}
                  refreshList={refreshList}
                  element={element}
                />
              )
            );
          default:
            return (
              <ItemListLi
                key={element.id}
                refreshList={refreshList}
                element={element}
              />
            );
        }
      })}
    </ul>
  );
}
