function MobileApp() {

  return (
    <section className="flex bg-gray-100/50">
      <div className="w-1/2 flex flex-col items-center justify-center px-20">
        <h2 className="text-4xl font-bold mb-4">
          Makin Hemat & Praktis dengan Aplikasi McDonald’s Download Sekarang
        </h2>
        <div className="flex">
          <a href="">
            <img
              className="scale-75"
              src="https://mcdonalds.co.id/assets/img/common/button_appstore.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="scale-75"
              src="https://mcdonalds.co.id/assets/img/common/button_playstore.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center scale-100 px-20 mt-10">
        <img
          className=" w-3/4"
          src="https://nos.jkt-1.neo.id/mcdonalds/app-section-footers/February2021/G4irt6FwzMogUyJKVJXS.png"
          alt="Image"
        />
      </div>
    </section>
  );
}

export default MobileApp;
