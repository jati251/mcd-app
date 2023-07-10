import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchCategories } from "../store/actions/actionCreator";
import TableCategory from "../components/tableCategory";

function CategoryView() {
  // local state
  const [isLoading, setIsLoading] = useState(true);
  // global state
  const { categories } = useSelector((state) => {
    return state.categories;
  });
  // lifecycle
  const dispatch = useDispatch();
  // lifecycle
  useEffect(() => {
    if (isLoading) {
      dispatch(fetchCategories())
        .then((res) => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categories]);

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
            <h2 className="font-bold text-xl">McDonald's Category List</h2>
          </div>
          <div className="md:ml-2">
            <Link
              href="#"
              to="/category/form"
              className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
            >
              Add new Category
            </Link>
          </div>
        </div>
        <table className=" border border-gray-300 min-w-full table-fixed divide-y divide-gray-200 bg-white text-sm">
          <thead className="text-center text-white divide-y divide-gray-200 bg-black">
            <tr>
              <th className="whitespace-nowrap py-2 p-2 font-medium w-20">
                No.
              </th>
              <th className="whitespace-nowrap py-2 p-2  font-medium ">Name</th>
              <th className="whitespace-nowrap py-2 p-2  font-medium w-80">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center divide-y divide-gray-200">
            {categories.map((category, index) => (
              <TableCategory key={index} category={category} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoryView;
