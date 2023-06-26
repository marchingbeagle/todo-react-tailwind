import ItemInput from "../itemInput";
import ItemList from "../itemList";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itensLeft, setItensLeft] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const addToList = () => {
    item != "" &&
      setItemList([
        ...itemList,
        {
          item,
          id: uuidv4(),
        },
      ]);

    setItem("");
  };

  useEffect(() => {
    const itensLeft = itemList.filter((item) => !item.checked);
    document.title = `${itensLeft.length} left`;
    setItensLeft(itensLeft);
  }, [itemList]);

  return (
    <section className="w-9/10 w-3xl m-auto flex max-w-3xl flex-1 flex-col text-gray-600 sm:shadow ">
      <div className="p-4">
        <h1 className="p-4 text-center text-3xl tracking-tighter">
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
