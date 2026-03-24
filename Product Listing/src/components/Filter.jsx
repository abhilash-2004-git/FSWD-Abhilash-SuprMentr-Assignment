function Filter({ setCategory }) {
  return (
    <div style={styles.container}>
     <button onClick={() => setCategory("All")}>All</button>
<button onClick={() => setCategory("Mobile")}>Mobile</button>
<button onClick={() => setCategory("Electronics")}>Electronics</button>
<button onClick={() => setCategory("Fashion")}>Fashion</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px"
  }
};

export default Filter;