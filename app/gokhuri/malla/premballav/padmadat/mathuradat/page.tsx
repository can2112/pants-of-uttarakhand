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
      <div className="flex  flex-col items-center py-4 w-screen h-screen  bg-blue-100">
        <Cart name="मथुरादत">
          <ArrowMark style=" right-10" />
          <BigLine style="!w-[16rem] top-[3.3rem] -right-[6rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>
        <section className="absolute">
          <Cart name="विजय" style="right-[8rem] top-[4rem]">
            <ArrowMark style="left-[1.5rem] " />
          </Cart>
          <Cart name="रजत" style="right-[8rem] top-[4rem]" />
        </section>
        <section className="absolute">
          <Cart name="भानु" style="left-[8rem] top-[4rem]">
            <ArrowMark style="left-[1.5rem] " />
          </Cart>
          <Cart name="पुष्कर" style="left-[8rem] top-[4rem]" />
        </section>
      </div>
    </>
  );
}

export default page;
