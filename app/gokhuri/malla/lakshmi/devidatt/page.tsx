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
        <Cart name="देवीदत्त" style="">
          <ArrowMark style="left-[1.5rem]" />
          <BigLine style="!w-[22rem] top-[3.3rem] -right-[9rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>

        <section className="absolute top-[8rem] ">
          <Cart name="ललित " style=" right-[10rem]">
            <ArrowMark style="left-[2rem]  " />
            <BigLine style="!w-[8rem] top-[3.3rem] -right-[6.8rem] ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] "} />
            </BigLine>
          </Cart>
          <section className="absolute top-[4.4rem] ">
            <Cart name="रोहित " style=" right-[9rem]" />
          </section>

          <section className="absolute top-[4.4rem] ">
            <Cart name="सोनू " style=" right-[2rem]" />
          </section>
        </section>
        <section className="absolute top-[8rem] ">
          <Cart name="ख्याली " style=" left-[10rem]"></Cart>
        </section>
      </div>
    </>
  );
}

export default page;
