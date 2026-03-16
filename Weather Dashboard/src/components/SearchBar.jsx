import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className={styles.row}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <button className={styles.btn} onClick={onSearch}>
        Search
      </button>
    </div>
  );
}