import {  useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();
  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        navigate(`/menu/detail/${props.product.id}`);
      }}
      href="#"
      className=" cursor-pointer p-4 scale-75 rounded-xl transition-shadow duration-500 ease-out hover:shadow-xl"
    >
      <img
        className="transform transition duration-500 hover:scale-125"
        src={props.product.imgUrl}
        alt=""
      />
      <p className="text-center font-bold text-2xl mt-8">
        {props.product.name}
      </p>
    </a>
  );
}

export default ProductCard;
