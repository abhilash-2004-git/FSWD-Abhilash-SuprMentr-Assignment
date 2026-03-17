import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const links = [
  { to: "/",        label: "Home"    },
  { to: "/mood",    label: "Mood"    },
  { to: "/tasks",   label: "Tasks"   },
  { to: "/weather", label: "Weather" },
  { to: "/about",   label: "About"   },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.brand}>MyApp</span>
      <div className={styles.links}>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}