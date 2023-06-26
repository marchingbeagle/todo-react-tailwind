function ItemInput({ name, value, setValue }) {
  return (
    <input
      onChange={(typedValue) => setValue(typedValue)}
      type="text"
      name={name}
      value={value}
      className="ItemInput box-border w-full rounded-lg border-2 p-4 transition-all hover:border-blue-200"
    />
  );
}
export default ItemInput;
