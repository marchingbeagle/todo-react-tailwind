function ItemListLi({ element, handleChecked }) {
  return (
    <li key={element.item} className="flex items-center p-2">
      <input
        className="mr-4 w-7 h-7"
        type="checkbox"
        onChange={() => handleChecked(element.id)}
        checked={element.checked || false}
      />
      <span className={`${element.checked ? "line-through" : ""}`}>
        {element.item}
      </span>
    </li>
  );
}

export default ItemListLi;
