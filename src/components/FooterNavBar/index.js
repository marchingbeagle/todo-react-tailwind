function FooterNavBar({ setFilter, filter }) {
  return (
    <nav className="flex flex-row items-center flex-wrap gap-6 sm:gap-4">
      <button
        onClick={() => setFilter("ALL")}
        className={`${
          filter === "ALL" ? "bg-blue-400 flex-1 text-white font-bold" : ""
        } 
         shadow p-4 sm:px-10 uppercase text-sm  rounded-md leading-3 hover:bg-blue-200`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("ACTIVE")}
        className={`${
          filter === "ACTIVE" ? "bg-blue-400 flex-1 text-white font-bold " : ""
        } shadow p-4 sm:px-10  uppercase text-sm rounded-md leading-3 hover:bg-blue-200`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("COMPLETED")}
        className={`${
          filter === "COMPLETED"
            ? "bg-blue-400 flex-1 text-white font-bold"
            : ""
        } shadow p-4 sm:px-10  uppercase text-sm rounded-md leading-3 hover:bg-blue-200`}
      >
        Completed
      </button>
    </nav>
  );
}

export default FooterNavBar;
