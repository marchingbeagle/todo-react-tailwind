function ItemInput({ name, value, setValue }) {
  return (
    <input
      onChange={(typedValue) => setValue(typedValue)}
      type="text"
      name={name}
      value={value}
      className="ItemInput w-full p-4 box-border border-2 rounded-lg"
    />
  );
}
export default ItemInput;
