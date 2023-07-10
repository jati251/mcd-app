import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  findCategory,
  updateCategory,
} from "../store/actions/actionCreator";
import { useNavigate, Link, useParams } from "react-router-dom";

function CategoryFormView() {
  // local state
  const [form, setForm] = useState({
    name: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  // global state
  const { category } = useSelector((state) => {
    return state.categories;
  });
  // requirement
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  // function
  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  function handleCreate(e) {
    e.preventDefault();
    if (id) {
      dispatch(updateCategory(id, form));
    } else {
      dispatch(createCategory(form));
    }
    navigate("/category");
  }
  // lifecycle
  useEffect(() => {
    if (isLoading) {
      if (id) {
        dispatch(findCategory(id))
        .then((result) => {
          setIsLoading(false);
        }).catch((err) => {
          console.log(err);
        });
      } else {
        setIsLoading(false);
      }
    } else {
      setForm({
        name: category.name,
      });
    }
  }, [category]);

  return (
    <>
      <div className="flex-grow  ml-48 my-20 px-2 ">
        <div className="mb-4 md:flex md:justify-between m-5 relative top-0">
          <div className="mb-4 md:mr-2 md:mb-0">
            <h2 className="font-bold text-xl">McDonald's Category Form</h2>
          </div>
        </div>
        <form action="" className="space-y-4 m-4">
          <div>
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            {isLoading ? (
              <img
                className="w-full pl-60 scale-50"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
                alt=""
              />
            ) : (
              <input
                onChange={handleForm}
                value={form.name}
                className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                placeholder="Insert category name here"
                type="text"
                name="name"
              />
            )}
          </div>

          <div className="mt-4">
            <button
              onClick={handleCreate}
              className="inline-block w-full m-1 rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Submit
            </button>
            <Link
              to="/category"
              className="inline-block w-full m-1 rounded-lg bg-red-600 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default CategoryFormView;
