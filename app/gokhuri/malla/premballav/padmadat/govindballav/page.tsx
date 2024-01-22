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
      <div className="flex flex-col items-center py-4 w-screen h-screen  bg-blue-100">
        <Cart name="गोविन्दबल्लव">
          <ArrowMark style="h-[2rem] right-10" />
        </Cart>
        <Cart name="जगदीशचन्द्र" style="top-[rem]">
          <ArrowMark style="h-[2rem]" />
          <BigLine style="!w-[16rem] top-[3.3rem] -right-[6rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>
        <section className="absolute">
          <Cart name="हिमॉशु" style="right-[8rem] top-[7.5rem]" />
        </section>
        <section className="absolute">
          <Cart name="विनय" style="left-[0.4rem] top-[7.5rem]" />
        </section>
        <section className="absolute">
          <Cart name="तनुज" style="left-[8rem] top-[7.5rem]" />
        </section>
      </div>
    </>
  );
}

export default page;
