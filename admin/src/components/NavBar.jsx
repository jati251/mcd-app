function NavBar() {
  return (
    <header className="fixed w-screen top-0 z-50 flex items-center justify-between bg-red-600 shadow-md">
      {/* <!-- logo --> */}
      <div className="flex items-center space-x-2 mx-10 p-3">
        <div>
          <svg
            className="w-10"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            viewBox="0 0 272.70001 238.5"
          >
            <path
              fill="#fc0"
              d="m195.8 17.933c23.3 0 42.2 98.3 42.2 219.7h34c0-130.7-34.3-236.5-76.3-236.5-24 0-45.2 31.7-59.2 81.5-14-49.8-35.2-81.5-59-81.5-42 0-76.2 105.7-76.2 236.4h34c0-121.4 18.7-219.6 42-219.6s42.2 90.8 42.2 202.8h33.8c0-112 19-202.8 42.3-202.8"
            />
          </svg>
        </div>

        <div className="font-bold text-white p-3 text-2xl">
          McDonald's Admin Panel
        </div>
      </div>
    </header>
  );
}

export default NavBar;
