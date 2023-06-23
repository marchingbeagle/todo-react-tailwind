import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddItemButton({ addToList }) {
  return (
    <button
      onClick={addToList}
      className="h-10 w-10 bg-blue-300 hover:bg-blue-400 transition rounded-lg"
    >
      <FontAwesomeIcon icon={faPlus} color="white" size="lg" />
    </button>
  );
}

export default AddItemButton;
