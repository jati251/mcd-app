import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileApp from "../components/MobileApp";
import PromoCard from "../components/PromoCard";
import Sikecil from "../components/Sikecil";
import MenuRekomendasi from "../components/MenuRekomendasi";
import { useEffect, useState } from "react";

function HomeView() {
  const [isLoading, setIsLoading] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const promo = [
    {
      name: "Paket Keluarga Seru edisi Puzzle Ronald & Friends",
      description:
        "GRATIS Puzzle Ronald & Friends dari Paket Keluarga Seru dengan mainan. Kumpulkan 3 serinya!",
      url: "https://nos.jkt-1.neo.id/mcdonalds/promos/May2023/WL1httsGzs2DQ2vzF0YR.png",
    },
    {
      name: "Promo McDelivery",
      description: "McDelivery Biaya Antar hanya Rp.1.000,-",
      url: "https://nos.jkt-1.neo.id/mcdonalds/promos/April2023/WqcpatmMs7yzzKFekrye.png",
    },
    {
      name: "Sundae Waffle Cup",
      description: "",
      url: "https://nos.jkt-1.neo.id/mcdonalds/promos/May2023/ZFyPtCIqSzs0ze9kafnu.png",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoading(false);
  }, []);

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
      <div>
        {/* Carousel */}
        <Slider {...settings} className="w-auto">
          <div>
            <a href="#">
              <img
                src="https://nos.jkt-1.neo.id/mcdonalds/home-banners/November2022/SORmnDDjHbRj9w2EPpZ7.jpg"
                alt="Image 1"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src="https://nos.jkt-1.neo.id/mcdonalds/home-banners/September2021/jpajp8xawWSUjrRSJvDQ.jpg"
                alt="Image 2"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src="https://nos.jkt-1.neo.id/mcdonalds/home-banners/December2022/0SShqF9MJ5CMMgDodfiN.jpeg"
                alt="Image 3"
              />
            </a>
          </div>
        </Slider>

        {/* Promo section */}
        <section className=" flex flex-col items-center m-20">
          <h1 className="text-4xl font-bold mb-6">Promo Menarik</h1>
          <div className="flex justify-center">
            <div className="flex space-x-4">
              {promo.map((el, index) => (
                <PromoCard key={index} card={el}></PromoCard>
              ))}
            </div>
          </div>
          <div className="pt-10">
            <button className="bg-red-600 text-white font-bold shadow-lg shadow-red-300 rounded-sm px-4 py-2 hover:bg-red-700">
              Lihat Semua Promo
            </button>
          </div>
        </section>

        {/* Menu favorit */}
        <MenuRekomendasi title={"Menu Favorit"} />
        {/* Mobile app section */}
        <Sikecil />
        <MobileApp />
      </div>
    </>
  );
}

export default HomeView;
