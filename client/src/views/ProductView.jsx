import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileApp from "../components/MobileApp";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "../store/actions/actionCreator";
import ProductCategory from "../components/ProductCategory";

function ProductView(props) {
  const [fadeIn, setFadeIn] = useState("opacity-0");
  const [isLoading, setIsLoading] = useState(true);
  const menus = useSelector((state) => {
    return state.menus;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchMenus())
    .then((result) => {
      setIsLoading(false);
      setTimeout(() => {
        setFadeIn("opacity-100");
      }, 600);
    }).catch((err) => {
      console.log(err);
    });
    
  }, []);

  const { ayam, sapi, sarapan, ikan, minuman } = menus;
  // console.log(menus);
  if (isLoading) {
    return (
      <img
        className="w-full h-60 scale-50"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt=""
      />
    );
  }

  return (
    <>
      {/* Banner */}
      <section className="flex p-4 bg-yellow-100/25 shadow-sm justify-center">
        <div
          className={`w-1/3 flex items-start flex-col mx-10 transition-opacity duration-1000 ease-in ${fadeIn}`}
        >
          <Link href="#" to="/" className="my-3 hover:text-red-600">
            ← HOME
          </Link>
          <h2 className="text-4xl font-bold my-4">
            Nikmati menu <br></br>
            pilihan terbaik
          </h2>
        </div>
        <div
          className={`w-1/3 flex items-center justify-center transition-opacity duration-1000 ease-in ${fadeIn}`}
        >
          <img
            className="w-full"
            src="https://mcdonalds.co.id/assets/img/menu/menu-pages.png"
            alt="Image"
          />
        </div>
      </section>

      {/* Main product section */}
      <section className="p-8 mx-10 mt-10">
        <ProductCategory title="Sarapan Pagi" products={sarapan} />
        <ProductCategory title="Daging Sapi" products={sapi} />
        <ProductCategory title="Ayam" products={ayam} />
        <ProductCategory title="Ikan" products={ikan} />
        <ProductCategory title="Minuman" products={minuman} />
      </section>
      {/* Mobile app section */}
      <MobileApp />
    </>
  );
}

export default ProductView;
