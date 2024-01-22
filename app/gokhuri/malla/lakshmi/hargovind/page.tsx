"use client";
import ArrowMark from "@/components/ArrowMark";
import BigLine from "@/components/BigLine";
import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="flex  flex-col items-center  w-screen h-screen  bg-blue-100">
        <Cart name="हरगोविन्द" style="">
          <ArrowMark />
          <BigLine style="!w-[22rem] top-[3.3rem] -right-[9rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>
        <section className="absolute top-[8rem] ">
          <Cart name="जगदीश " style=" right-[10rem]">
            <ArrowMark style="left-[2rem]  " />
          </Cart>
          <Cart name="संतोष " style=" right-[10rem]" />
        </section>
        <section className="absolute top-[8rem] ">
          <Cart name="जीवन " style=" left-[10rem]">
            <ArrowMark style="right-5  h-[2.8rem] " />
            <BigLine style="!w-[8rem] top-[4.3rem] right-[2.3rem] ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
            </BigLine>
          </Cart>
          <div className="absolute top-[5.2rem]">
            <Cart name="हिमांशु  " style=" left-[2rem] " />
          </div>
          <Cart name="कवीन्द्र " style=" left-[10rem] top-9" />
        </section>
      </div>
    </>
  );
}

export default page;
