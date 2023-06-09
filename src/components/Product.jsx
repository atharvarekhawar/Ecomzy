import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div
      className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in 
    hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  gap-3 p-4 mt-10 ml-5 rounded-xl"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 ">
          {post.title}
        </p>
      </div>
      <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
        <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt="product" className="w-full h-full" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold ">${post.price}</p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <button
            onClick={removeFromCart}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px]
           p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 "
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px]
           p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 "
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
