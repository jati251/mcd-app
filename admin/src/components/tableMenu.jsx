import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMenu } from "../store/actions/actionCreator";
import Swal from "sweetalert2";

function TableMenu(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { menu, index } = props;
  const handleDelele = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Do you want delete this menu?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteMenu(menu.id));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{menu.name}</td>
      <td className="w-48">
        <img src={menu.imgUrl} alt="" />
      </td>
      <td>{menu.description}</td>
      <td>
        {menu.Ingredients.map((ingredient, i) => (
          <p key={i}>{ingredient.name}</p>
        ))}
      </td>
      <td>{menu.Category.name}</td>
      <td>{menu.price}</td>
      <td className="flex flex-col justify-center items-center mt-4">
        <button
          onClick={(event) => {
            event.preventDefault();
            navigate(`/menu/form/${menu.id}`);
          }}
          className="bg-green-600 text-white font-bold shadow-lg rounded-sm px-4 py-2 m-1"
        >
          Edit
        </button>
        <button
          onClick={handleDelele}
          className="bg-red-600 text-white font-bold shadow-lg rounded-sm px-4 py-2 m-1"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableMenu;
