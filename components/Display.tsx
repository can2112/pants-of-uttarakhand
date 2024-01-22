import React from "react";

type IProps = {
  img: string;
  name: string;
  role: string;
};

function Display({ img, name, role }: IProps) {
  return (
    <section className="flex items-center gap-10">
      <img src={img} alt={name} className="rounded-full h-20 w-20" />
      <div className="flex flex-col">
        <h3 className="font-bold text-blue-800 text-lg">{name}</h3>
        <p className="text-gray-700">{role}</p>
      </div>
    </section>
  );
}

export default Display;
