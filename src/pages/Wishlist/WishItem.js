import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteWishItem,
} from "../../redux/shopSlice";

const WishItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = item.name;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: item,
      },
    });
  };
  return (
      <div className="col-span-1 flex flex-col items-center gap-4 p-4 border rounded-md">
        <ImCross
          onClick={() => dispatch(deleteWishItem(item._id))}
          className="self-end text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold text-center hover:underline cursor-pointer" onClick={handleProductDetails}>{item.name}</h1>
      </div>
     
  );
};

export default WishItem;
