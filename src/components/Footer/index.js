import AddItemButton from "../AddItemButton";
import FooterNavBar from "../FooterNavBar";
import ItensLeft from "../ItensLeft";

function Footer({ addToList, itensLeft, setFilter, filter }) {
  return (
    <footer className="flex flex-col justify-between p-3 sm:flex-row sm:bg-gray-100">
      <div className="flex items-center gap-5 py-4 sm:basis-4/12  sm:justify-start sm:py-0">
        <AddItemButton addToList={addToList} />
        <ItensLeft itensLeft={itensLeft} />
      </div>
      <FooterNavBar filter={filter} setFilter={setFilter} />
    </footer>
  );
}

export default Footer;
