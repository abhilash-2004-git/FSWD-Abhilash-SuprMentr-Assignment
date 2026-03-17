import styles from "../styles/About.module.css";

const routes = [
  { path: "/",        desc: "Home — landing page"              },
  { path: "/mood",    desc: "Mood — useState tracker"          },
  { path: "/tasks",   desc: "Tasks — add/delete with hooks"    },
  { path: "/weather", desc: "Weather — fetch + async/await"    },
  { path: "/about",   desc: "About — static info page"         },
];

const stack = ["React 18", "React Router v6", "useState / useEffect", "CSS Modules"];

export default function About() {
  return (
    <div>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.sub}>This SPA combines all previous assignments into one app.</p>

      <div className={styles.card}>
        <p className={styles.cardTitle}>Pages in this app</p>
        {routes.map(({ path, desc }) => (
          <div key={path} className={styles.routeRow}>
            <code className={styles.path}>{path}</code>
            <span className={styles.desc}>{desc}</span>
          </div>
        ))}
      </div>

      <div className={styles.card}>
        <p className={styles.cardTitle}>Tech stack</p>
        <div className={styles.badges}>
          {stack.map((s) => <span key={s} className={styles.badge}>{s}</span>)}
        </div>
      </div>
    </div>
  );
}