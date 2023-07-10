function Footer() {
  return (
    <>
      <div className="flex w-auto justify-around my-10">
        <div className="item">
          <h1 className="font-bold text-xl">McDonald's</h1>
          <div className="mt-1 flex flex-col">
            <a className="m-1 hover:text-yellow-500" href="#">
              Hubungi Kami
            </a>
            <a className="m-1 hover:text-yellow-500" href="#">
              Tentang Kami
            </a>
            <a className="m-1 hover:text-yellow-500" href="#">
              Newsroom
            </a>
            <a className="m-1 hover:text-yellow-500" href="#">
              Karier
            </a>
          </div>
        </div>
        <div className="item">
          <br></br>
          <div className="mt-2 flex flex-col">
            <a className="m-1 hover:text-yellow-500" href="#">
              Layanan
            </a>
            <a className="m-1 hover:text-yellow-500" href="#">
              Sertifikasi & Jaminan Kualitas
            </a>
            <a className="m-1 hover:text-yellow-500" href="#">
              CSR
            </a>
            <a className="m-1 hover:text-yellow-500" href="#">
              Aplikasi McDonald’s
            </a>
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-xl">Hubungi Kami</h1>
          <div className="flex">
            <a className="m-2 scale-125" href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a className="m-2 scale-125" href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a className="m-2 scale-125" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a className="m-2 scale-125" href="#">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a className="m-2 scale-125" href="#">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </div>
          <div className="flex w-40">
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
        <div className="item">
          <h1 className="font-bold text-xl">Berlangganan newsletter McD</h1>
          <form action="#" class="sm:flex sm:gap-4 py-3">
            <div className="sm:flex-1">
              <label for="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Masukan email"
                className="w-full rounded-md border-black bg-white p-3 text-gray-700 shadow-md transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium">Daftar </span>
            </button>
          </form>
        </div>
      </div>

      <div className=" bg-gray-200/75">
        <div className="container p-4">
          <div className="flex justify-between px-10">
            <div className="text-gray-600">
              <a
                className="px-2"
                href="https://mcdonalds.co.id/terms-conditions"
              >
                Syarat &amp; Ketentuan
              </a>
              <a className="px-2" href="https://mcdonalds.co.id/privacy-policy">
                Kebijakan Privasi
              </a>
            </div>
            <div className=" columns-md order-first">
              © 2023 McDonald's Indonesia
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
