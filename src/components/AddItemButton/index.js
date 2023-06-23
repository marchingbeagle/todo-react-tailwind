function AddItemButton({ addToList }) {
  return (
    <button onClick={addToList} className="h-10 w-10 bg-blue-400 rounded-full">
      +
    </button>
  );
}

export default AddItemButton;
