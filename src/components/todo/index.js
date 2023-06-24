import ItemInput from "../itemInput";
import { useEffect, useState } from "react";
import ItemList from "../itemList";
import Footer from "../Footer";

function Todo() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itensLeft, setItensLeft] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const clearInput = () => {
    setItem("");
  };

  const addToList = () => {
    if (item === "") {
      return null;
    }

    const newItem = {
      item,
      id: itemList.length,
    };

    const newList = [...itemList, newItem];

    setItemList(newList);
    clearInput();
  };

  useEffect(() => {
    const itensLeft = itemList.filter((item) => !item.checked);
    document.title = itensLeft.length;
    setItensLeft(itensLeft);
  }, [itemList]);

  return (
    <section className="flex-1 flex m-auto w-9/10 flex-col w-3xl max-w-3xl sm:shadow">
      <div className="p-4">
        <h1 className="text-center text-3xl p-4 tracking-tighter">
          THINGS TO DO
        </h1>
        <ItemInput
          setValue={(item) => setItem(item.target.value)}
          value={item}
        />
        <ItemList
          filter={filter}
          itemList={itemList}
          setItemList={setItemList}
        />
      </div>
      <Footer
        filter={filter}
        setFilter={setFilter}
        addToList={addToList}
        itensLeft={itensLeft.length}
      />
    </section>
  );
}

export default Todo;
