import AddItemButton from "../AddItemButton";
import FooterNavBar from "../FooterNavBar";
import ItensLeft from "../ItensLeft";

function Footer({ addToList, itensLeft, setFilter, filter }) {
  return (
    <footer className="flex flex-col sm:flex-row justify-between bg-gray-100 p-3">
      <div className="flex items-center basis-4/12 gap-5 justify-center sm:justify-start py-4 sm:py-0">
        <AddItemButton addToList={addToList} />
        <ItensLeft itensLeft={itensLeft} />
      </div>
      <FooterNavBar filter={filter} setFilter={setFilter} />
    </footer>
  );
}

export default Footer;
