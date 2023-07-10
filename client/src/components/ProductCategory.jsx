import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductCategory(props) {
  const [fadeIn, setFadeIn] = useState("opacity-0");
  const { products, title } = props;
  // console.log(props);
  useEffect(() => {
    setTimeout(() => {
      setFadeIn("opacity-100");
    }, 600);
  }, []);

  return (
    <div>
      <h1
        className={`text-4xl font-bold mb-4 text-center my-12 transition-opacity duration-1000 ease-in ${fadeIn}`}
      >
        {title}
      </h1>
      <div
        className={`grid grid-cols-4 gap-4 transition-opacity duration-1000 ease-in ${fadeIn}`}
      >
        {products.map((el, index) => (
          <ProductCard key={index} product={el} />
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;
