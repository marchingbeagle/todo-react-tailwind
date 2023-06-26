function NavBarButton({ setFilter, filter, children }) {
  return (
    <button
      onClick={setFilter}
      className={`${
        filter.toUpperCase() == children.toUpperCase()
          ? "flex-1 bg-blue-400 font-bold text-white"
          : ""
      } 
         rounded-md p-4 text-sm uppercase leading-3  shadow transition-all hover:translate-y-1 hover:bg-blue-200 sm:px-10`}
    >
      {children}
    </button>
  );
}

export default NavBarButton;
