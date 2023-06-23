function AddItemButton({ addToList }) {
  return (
    <button
      onClick={addToList}
      className="h-5 w-5 bg-blue-400 rounded-full"
    ></button>
  );
}

export default AddItemButton;
