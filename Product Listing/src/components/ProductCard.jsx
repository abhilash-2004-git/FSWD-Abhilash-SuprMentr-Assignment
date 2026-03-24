function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />

      <div style={styles.content}>
        <h3>{product.name}</h3>
        <p style={styles.category}>{product.category}</p>
        <p style={styles.price}>💲{product.price}</p>

        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    transition: "0.3s",
    background: "#fff"
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover"
  },
  content: {
    padding: "15px",
    textAlign: "center"
  },
  category: {
    color: "gray",
    fontSize: "14px"
  },
  price: {
    fontWeight: "bold",
    margin: "10px 0"
  },
  button: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default ProductCard;