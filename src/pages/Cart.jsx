import React,{useState,useEffect} from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

useEffect(()=>{
   setTotalAmount(cart.reduce((acc,curr) => acc+curr.price,0));
},[cart])

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      {cart.length > 0 ? (
        <div className="flex flex-col-reverse md:flex-row max-w-6xl p-2 mx-auto space-x-10 min-h-[80vh]">
          <div className="max-w-xl mx-auto">
            {cart.map((item,index) => (
              <CartItem key={item.id} item={item} itemIndex={index}/>
            ))}
          </div>
          <div className="flex flex-col p-4 justify-between sm:max-h-[50vh] text-center md:text-left md:min-h-[80vh] h-[80vh]">
            <div className="flex flex-col">
              <div className="text-lg text-green-800 font-semibold uppercase">Your Cart</div>
              <div className="text-6xl font-semibold  md:font-bold text-green-800 uppercase">Summary</div>
              <p>
                <span className="text-black font-semibold">Total Items : {cart.length}</span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-500 font-semibold">Total Amount: <span className="text-black font-bold">${(totalAmount).toFixed(2)}</span> </p>
              <button className="bg-green-800 w-full text-white p-3 rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl uppercase text-green-800 font-bold">Cart Empty</h1>
          <Link to="/">
            <button className="bg-green-800 w-full text-white p-2 rounded-lg">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
