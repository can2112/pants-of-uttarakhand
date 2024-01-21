import React from "react";
import { FaInfoCircle } from "react-icons/fa";

interface Icart {
  name: string;
  children?: any;
  style?: string;
  click?: any;
  onClick?: () => void;
}

const Cart = ({ name, children, style, click, onClick }: Icart) => {
  return (
    <div
      className={` m-2 ${
        !click ? "bg-blue-200" : " bg-blue-600 text-white "
      } px-2 py-2 rounded relative ${style} ${click && "cursor-pointer"}`}
      onClick={() => {
        click && onClick && onClick();
      }}
    >
      <section className="flex justify-between items-center gap-4">
        <p className="">{name}</p>
        {click && <FaInfoCircle />}
      </section>
      {children}
    </div>
  );
};

export default Cart;
