import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCategory } from "../store/actions/actionCreator";

function TableCategory(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category, index } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{category.name}</td>
      <td className="flex flex-col justify-center items-center mt-4">
        <button
          onClick={(event) => {
            event.preventDefault();

            navigate(`/category/form/${category.id}`);
          }}
          className="bg-green-600 text-white font-bold shadow-lg rounded-sm px-4 py-2 m-1"
        >
          Edit
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            dispatch(deleteCategory(category.id));
          }}
          className="bg-red-600 text-white font-bold shadow-lg rounded-sm px-4 py-2 m-1"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableCategory;
