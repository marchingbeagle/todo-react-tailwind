import NavBarButton from "./NavBarButton";

function FooterNavBar({ setFilter, filter }) {
  return (
    <nav className="flex flex-row items-center flex-wrap gap-6 sm:gap-4">
      <NavBarButton setFilter={() => setFilter("ALL")} filter={filter}>
        All
      </NavBarButton>
      <NavBarButton setFilter={() => setFilter("ACTIVE")} filter={filter}>
        Active
      </NavBarButton>
      <NavBarButton setFilter={() => setFilter("COMPLETED")} filter={filter}>
        Completed
      </NavBarButton>
    </nav>
  );
}

export default FooterNavBar;
