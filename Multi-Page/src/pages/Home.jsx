import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";

const cards = [
  { to: "/mood",    title: "Mood tracker",  desc: "Track how you feel each day."       },
  { to: "/tasks",   title: "Task list",     desc: "Add, complete, and delete tasks."   },
  { to: "/weather", title: "Weather",       desc: "Check live weather by city."        },
  { to: "/about",   title: "About",         desc: "Learn about this project."          },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className={styles.heading}>Welcome to MyApp</h2>
      <p className={styles.sub}>A multi-page SPA built with React Router.</p>
      <div className={styles.grid}>
        {cards.map(({ to, title, desc }) => (
          <div key={to} className={styles.card} onClick={() => navigate(to)}>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}