function ItensLeft({ itensLeft }) {
  return (
    <div className="uppercase text-sm">
      {itensLeft == 1 ? `${itensLeft} item left` : `${itensLeft} itens left`}
    </div>
  );
}

export default ItensLeft;
