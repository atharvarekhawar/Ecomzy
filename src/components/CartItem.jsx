import React from "react";
import { MdDelete} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex justify-center items-center p-2 gap-x-10 border-b-2 border-gray-500">
      <div>
        <div className="w-[170px] p-4">
          <img src={item.image} alt="product" 
            className="w-full"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <h1 className="text-gray-700 font-semibold text-lg">{item.title}</h1>
          <p className="text-gray-500">
           {item.description.substr(0,80) + "..."}
          </p>
          <div className="flex justify-between">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeFromCart}
            className="rounded-full w-10 h-10 mr-3 flex justify-center items-center bg-pink-200 cursor-pointer">
              <MdDelete fill="#ca2323"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
