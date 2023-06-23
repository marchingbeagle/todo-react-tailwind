function ItemListLi({ element, handleChecked }) {
  return (
    <li key={element.item}>
      <input
        className="mr-4"
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
