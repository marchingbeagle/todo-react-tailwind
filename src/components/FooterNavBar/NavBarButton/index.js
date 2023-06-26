function NavBarButton({ setFilter, filter, children }) {
  return (
    <button
      onClick={setFilter}
      className={`${
        filter.toUpperCase() == children.toUpperCase()
          ? "bg-blue-400 flex-1 text-white font-bold"
          : ""
      } 
         shadow p-4 sm:px-10 uppercase text-sm  rounded-md leading-3 hover:bg-blue-200`}
    >
      {children}
    </button>
  );
}

export default NavBarButton;
