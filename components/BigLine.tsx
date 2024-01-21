import React from "react";

type BigLineProps = {
  style?: string;
  children: any;
};

function BigLine({ style, children }: BigLineProps) {
  return (
    <div
      className={`absolute w-[15rem] h-1 bg-black flex justify-between ${style}}`}
    >
      {children}
    </div>
  );
}

export default BigLine;
