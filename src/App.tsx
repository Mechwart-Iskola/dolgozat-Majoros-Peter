import "./App.css";
import { useEffect, useState } from "react";
import { Product } from "./types/Product";
import ProductCard from "./ProductCard";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productcard, setProductCard] = useState<any>(null);

  useEffect(() => {
    fetch("./products.json")
      .then(G => G.json())
      .then(G => setProducts(G.products))
      .catch(G => console.log(`Valami baj van: ${G}`))

    console.log(products);
  }, []);

  const handleClick = () => {
    const query: string = (document.querySelector('#searchText') as HTMLInputElement).value;
    let product = products.find(G => G.name.toLowerCase().includes(query.toLocaleLowerCase()))
    setProductCard(<ProductCard product={product} />);
  }

  return (
    <div>
      <h1>Product Information</h1>
      <div className="product-card">
        <div className="search-section">
          <label>Enter Product Name:</label>
          <input type="text" id="searchText" />
          <button type="button" onClick={handleClick}>Search</button>
        </div>
        <div className="results-section">
          {productcard}
        </div>
      </div>
    </div>
  );
}

export default App; 