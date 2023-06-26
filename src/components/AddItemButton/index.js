import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddItemButton({ addToList }) {
  return (
    <button
      onClick={addToList}
      className="h-10 w-10 transform-gpu rounded-lg bg-blue-300 transition-all hover:scale-110 hover:bg-blue-400"
    >
      <FontAwesomeIcon icon={faPlus} color="white" size="lg" />
    </button>
  );
}

export default AddItemButton;
