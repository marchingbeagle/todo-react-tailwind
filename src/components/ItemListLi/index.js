import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

function ItemListLi({ element, refreshList }) {
  return (
    <li className="flex items-center py-2">
      <FontAwesomeIcon
        onClick={() => refreshList(element.id)}
        className={`hover:translate-x-1 transition-all mr-4 ${
          element.checked ? "text-blue-300" : "text-gray-300"
        }`}
        icon={element.checked ? faSquareCheck : faSquare}
        size="2x"
      />
      <span className={`${element.checked ? "line-through " : ""}`}>
        {element.item}
      </span>
    </li>
  );
}

export default ItemListLi;
