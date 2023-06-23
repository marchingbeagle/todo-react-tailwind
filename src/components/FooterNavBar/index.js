function FooterNavBar({ setFilter, filter }) {
  return (
    <nav className="flex gap-2  ">
      <button
        onClick={() => setFilter("ALL")}
        className={`${
          filter === "ALL" ? "bg-blue-300 " : ""
        } shadow-sm p-2 uppercase text-sm rounded-md leading-3 hover:bg-gray-200`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("ACTIVE")}
        className={`${
          filter === "ACTIVE" ? "bg-blue-300 " : ""
        } shadow-sm p-2 uppercase text-sm rounded-md leading-3 hover:bg-gray-200`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("COMPLETED")}
        className={`${
          filter === "COMPLETED" ? "bg-blue-300 " : ""
        } shadow-sm p-2 uppercase text-sm rounded-md leading-3 hover:bg-gray-200`}
      >
        Completed
      </button>
    </nav>
  );
}

export default FooterNavBar;
