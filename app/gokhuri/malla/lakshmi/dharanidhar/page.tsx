"use client";
import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import React from "react";
import ArrowMark from "@/components/ArrowMark";
import BigLine from "@/components/BigLine";

function page() {
  return (
    <>
      <Navbar />
      <div className="flex  flex-col items-center  w-screen h-screen  bg-blue-100">
        <Cart name="धरणीधर" style="">
          <ArrowMark style="left-[1.5rem] h-[1.8rem]" />
          <BigLine style="!w-[22rem] top-[3.3rem] -right-[9rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>

        <section className="absolute top-[8rem] ">
          <Cart name="हेम " style=" right-[11rem]" />
        </section>
        <section className="absolute top-[8rem] ">
          <Cart name="गणेश " style=" right-[]" />
        </section>
        <section className="absolute top-[8rem] ">
          <Cart name="देवेन्द्र " style=" left-[10rem]"></Cart>
        </section>
      </div>
    </>
  );
}

export default page;
