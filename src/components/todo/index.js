import ItemInput from "../itemInput";
import { useEffect, useState } from "react";
import ItemList from "../itemList";
import Footer from "../Footer";

function Todo() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itensLeft, setItensLeft] = useState([]);

  const clearInput = () => {
    setItem("");
  };

  const addToList = () => {
    const newList = [
      ...itemList,
      {
        item,
        id: itemList.forEach((_, index) => (itemList[index].id = index)),
      },
    ];
    setItemList(newList);
    clearInput();
  };

  useEffect(() => {
    const itensLeft = itemList.filter((item) => !item.checked);
    document.title = itensLeft.length;
    setItensLeft(itensLeft);
  }, [itemList]);

  return (
    <section className="flex m-auto w-9/10 flex-col w-3xl max-w-3xl shadow">
      <div className="p-4">
        <h1 className="text-center text-3xl p-4">THINGS TO DO</h1>
        <ItemInput
          setValue={(item) => setItem(item.target.value)}
          value={item}
        />
        <ItemList itemList={itemList} setItemList={setItemList} />
      </div>
      <Footer addToList={addToList} itensLeft={itensLeft.length} />
    </section>
  );
}

export default Todo;
