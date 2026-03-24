import { useState } from "react";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";
import products from "./data";

function App() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🛍️ Product Store</h1>

      <Filter setCategory={setCategory} />

      <div style={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  app: {
    padding: "20px",
    background: "#f5f5f5",
    minHeight: "100vh"
  },
  title: {
    textAlign: "center"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center"
  }
};

export default App;