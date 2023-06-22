function AddItemButton({ addToList }) {
  return (
    <button
      onClick={addToList}
      className="h-5 w-5 bg-yellow-300 rounded-full"
    ></button>
  );
}

export default AddItemButton;
