import AddItemButton from "../AddItemButton";
import FooterNavBar from "../FooterNavBar";
import ItensLeft from "../ItensLeft";

function Footer({ addToList, itensLeft }) {
  return (
    <footer className="flex justify-between bg-gray-100 p-3">
      <div className="flex items-center basis-4/12 gap-5 justify-start">
        <AddItemButton addToList={addToList} />
        <ItensLeft itensLeft={itensLeft} />
      </div>
      <FooterNavBar />
    </footer>
  );
}

export default Footer;
