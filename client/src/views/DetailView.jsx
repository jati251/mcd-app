import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MobileApp from "../components/MobileApp";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuDetail } from "../store/actions/actionCreator";
import MenuRekomendasi from "../components/MenuRekomendasi";

function DetailView() {
  const [fadeIn, setFadeIn] = useState("opacity-0");
  const [transition, setTransition] = useState("");
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { menu } = useSelector((state) => {
    return state.menuDetail;
  });
  // if (menu.Category) {
  //   const { Category, User, Ingredients } = menu;
  //   // console.log(Category.name);
  //   // console.log(User.email);
  //   // console.log(Ingredients[0]);
  // }

  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0);
      dispatch(fetchMenuDetail(id))
        .then((result) => {
          setIsLoading(false);
          setTimeout(() => {
            setFadeIn("opacity-100");
          }, 100);
          setTimeout(() => {
            setTransition("translate-x-40");
          }, 100);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setProduct(menu);
      // console.log(product);
    }
  }, [menu]);

  if (isLoading) {
    return (
      <img
        className="w-full pl-60 scale-50"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt=""
      />
    );
  }

  return (
    <>
      {/* Main Detail */}
      <section className="flex p-4 pr-40 bg-yellow-50/50 justify-center">
        <div className="w-1/2 flex flex-col ">
          <Link href="#" to="/menu" className="my-3 px-80 hover:text-red-600">
            ← MENU
          </Link>
          <img
            className={` mr-40 scale-90 w-auto transform transition-all duration-1000 ${transition}`}
            src={menu.imgUrl}
            alt="Image"
          />
        </div>
        <div
          className={` flex flex-col justify-center transition-opacity duration-1000 ease-in ${fadeIn}`}
        >
          <h2 className="text-4xl font-bold mb-4">{menu.name}</h2>
          <p className=" text-gray-700 text-lg mb-4">{menu.description}</p>

          <div className="mb-4 w-60 flex-col bg-yellow-400 shadow-yellow-100 text-gray-800 rounded-lg px-4 py-2">
            <h1 className=" font-bold">Category</h1>
            <p>{menu.Category.name}</p>
            <h1 className=" font-bold">Author</h1>
            <p>{menu.User.email}</p>
            <h1 className=" font-bold">Ingredients</h1>
            {menu.Ingredients.map((el, index) => (
              <p key={index}>{el.name}</p>
            ))}
          </div>
          <div className="inline-flex">
            <button className="flex mb-4 bg-red-600 text-white font-bold shadow-lg shadow-red-300 rounded-lg px-4 py-2 hover:bg-red-700">
              <img className="w-10 mx-2" src={menu.imgUrl} alt="Image" /> Pesan
              Sekarang
            </button>
          </div>
        </div>
      </section>

      <br></br>
      {/* Menu Rekomendasi */}

      <MenuRekomendasi title={"Menu Rekomendasi Lainnya"} />
      {/* Mobile app section */}
      <MobileApp />
    </>
  );
}

export default DetailView;
