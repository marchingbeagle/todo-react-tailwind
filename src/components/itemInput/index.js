function ItemInput({ name, value, setValue }) {
  return (
    <input
      onChange={(typedValue) => setValue(typedValue)}
      type="text"
      name={name}
      value={value}
      className="ItemInput w-full p-4 box-border border-2 rounded-lg hover:border-blue-200 transition-all"
    />
  );
}
export default ItemInput;
