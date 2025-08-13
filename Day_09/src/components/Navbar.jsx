import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyWebsite</h2>
      <ul style={styles.navLinks}>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "red" : "")} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "red" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "red" : "")}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#333",
    padding: "10px 20px",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
  },
};

export default Navbar;
