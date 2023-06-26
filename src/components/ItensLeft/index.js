function ItensLeft({ itensLeft }) {
  return (
    <div className="text-sm uppercase">
      {itensLeft == 1 ? `${itensLeft} item left` : `${itensLeft} itens left`}
    </div>
  );
}

export default ItensLeft;
