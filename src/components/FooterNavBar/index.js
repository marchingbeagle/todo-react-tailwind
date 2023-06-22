function FooterNavBar() {
  return (
    <nav className="flex gap-2">
      <button className="bg-gray-300 p-2 uppercase text-sm rounded-md leading-3 hover:bg-gray-200">
        All
      </button>
      <button className="bg-gray-300 p-2 uppercase text-sm rounded-md leading-3 hover:bg-gray-200">
        Active
      </button>
      <button className="bg-gray-300 p-2 uppercase text-sm rounded-md leading-3 hover:bg-gray-200">
        Completed
      </button>
    </nav>
  );
}

export default FooterNavBar;
