"use client";
import ArrowMark from "@/components/ArrowMark";
import Cart from "@/components/Cart";
import React from "react";

function page() {
  return (
    <div className="flex mt-1 flex-col items-center w-screen h-screen">
      <Cart name="भानुदेव 8">
        <ArrowMark style="left-[2rem]" />
      </Cart>
      <Cart name="मुकुन्द 9">
        <ArrowMark style="left-[2rem]" />
      </Cart>
      <Cart name="विश्वरूप 10">
        <ArrowMark style="left-[2.7rem]" />
      </Cart>
      <Cart name="नाथू (राठ)  11" />
    </div>
  );
}

export default page;
