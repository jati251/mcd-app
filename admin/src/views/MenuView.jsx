import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMenus } from "../store/actions/actionCreator";
import TableMenu from "../components/tableMenu";

function MenuView() {
  // local state
  const [isLoading, setIsLoading] = useState(true);
  // global State
  const { menus } = useSelector((state) => {
    return state.menus;
  });
  // requirement
  const dispatch = useDispatch();
  // lifecycle
  useEffect(() => {
    if (isLoading) {
      dispatch(fetchMenus())
        .then((res) => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

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
      <div className="flex-grow  ml-48 my-20 px-2 ">
        <div className="mb-4 md:flex md:justify-between m-5 relative top-0">
          <div className="mb-4 md:mr-2 md:mb-0">
            <h2 className="font-bold text-xl">McDonald's Menu List</h2>
          </div>
          <div className="md:ml-2">
            <Link
              href="#"
              to="/menu/form"
              className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
            >
              Add new Menu
            </Link>
          </div>
        </div>
        <table className=" border border-gray-300 min-w-full table-fixed divide-y divide-gray-200 bg-white text-sm">
          <thead className="text-center text-white divide-y divide-gray-200 bg-black">
            <tr>
              <th className="whitespace-nowrap py-2 p-2 font-medium">No.</th>
              <th className="whitespace-nowrap py-2 p-2 w-20 font-medium ">
                Name
              </th>
              <th className="whitespace-nowrap py-2 p-2  font-medium">Image</th>
              <th className="whitespace-nowrap py-2 p-2  font-medium w-80">
                Description
              </th>
              <th className="whitespace-nowrap py-2 p-2  font-medium w-40">
                Ingredients
              </th>
              <th className="whitespace-nowrap py-2 p-2  font-medium ">
                Category
              </th>
              <th className="whitespace-nowrap py-2 p-2  font-medium ">
                Price
              </th>
              <th className="whitespace-nowrap py-2 p-2 font-medium ">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center divide-y divide-gray-200">
            {menus.map((menu, index) => (
              <TableMenu key={index} menu={menu} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MenuView;
