import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMenus } from "../store/actions/actionCreator";

function MenuRekomendasi(props) {
  const { sapi } = useSelector((state) => {
    return state.menus;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus());
  }, []);

  if (!sapi) {
    return <h1>Loading..</h1>;
  }
  return (
    <section className=" bg-gray-100/50">
      <div className="py-10 w-full flex-col text-center shadow-xl">
        <h1 className="text-4xl font-bold mb-6">{props.title}</h1>
        <div className={`grid grid-cols-4 gap-4`}>
          {sapi.map((el, index) => (
            <ProductCard key={index} product={el} />
          ))}
        </div>
        <div className="py-10">
          <Link
            href="#"
            to="/menu"
            className="bg-red-600 text-white font-bold shadow-lg shadow-red-300 rounded-sm px-4 py-2 hover:bg-red-700"
          >
            {" "}
            Lihat Semua Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MenuRekomendasi;
