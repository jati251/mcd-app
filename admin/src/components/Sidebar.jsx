import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function Sidebar() {
  const navigate = useNavigate();
  function logoutHandler(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
    Swal.fire({
      icon: 'success',
      title: 'Account has been logged out',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="fixed top-0 mt-20 flex h-screen flex-col justify-between w-48  bg-yellow-400">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1">
          <li>
            <Link
              href="#"
              to="/menu"
              className="block rounded-lg px-4 py-2 font-medium hover:bg-yellow-500 hover:text-gray-800"
            >
              Menu List
            </Link>
          </li>

          <li>
            <Link
              href="#"
              to="/category"
              className="block rounded-lg px-4 py-2 font-medium hover:bg-yellow-500 hover:text-gray-800"
            >
              Category
            </Link>
          </li>

          <li>
            <Link
              to="/register"
              className="block rounded-lg px-4 py-2 font-medium hover:bg-yellow-500 hover:text-gray-800"
            >
              Register New Admin
            </Link>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-yellow-500 hover:text-gray-800">
                <span className="font-medium"> Account </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </span>
              </summary>
              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <button
                    onClick={logoutHandler}
                    className="w-full rounded-lg px-4 py-2 font-medium [text-align:_inherit] hover:bg-yellow-500 hover:text-gray-800"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
