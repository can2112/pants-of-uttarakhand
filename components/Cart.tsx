import React from "react";

const Cart = ({ member }: any) => {
  console.log(member, "member=--->");
  return (
    <div className=" m-5">
      <div className="w-full h-10 m-5 relative bg-blue-300 rounded-full flex justify-center items-center">
        <span className="text-white text-sm font-semibold">{member.text}</span>

        {member?.children?.length > 0 && (
          <div className="flex flex-col gap-5 items-center absolute left-10 top-10">
            {member.children.map((child: any) => (
              <Cart key={child.id} member={child} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
