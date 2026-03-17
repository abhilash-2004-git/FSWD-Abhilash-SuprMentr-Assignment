import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Mood from "./pages/Mood";
import Tasks from "./pages/Tasks";
import Weather from "./pages/Weather";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <Routes>
          <Route path="/"        element={<Home />}    />
          <Route path="/mood"    element={<Mood />}    />
          <Route path="/tasks"   element={<Tasks />}   />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about"   element={<About />}   />
        </Routes>
      </main>
    </div>
  );
}