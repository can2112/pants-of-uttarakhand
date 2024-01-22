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
      <div className="flex  flex-col items-center w-screen h-screen  bg-blue-100">
        {" "}
        <Cart name="चरणदत्त ">
          <ArrowMark style="right-7 h-[2rem]" />
          <BigLine style="!w-[22rem] top-[3.3rem] -right-[9rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
            <ArrowMark style={"left-[6rem] top-[1px] "} />
            <ArrowMark style={"right-[6rem] top-[1px] "} />
          </BigLine>
        </Cart>
        <section className="absolute">
          <Cart name="देवकीदन्दन 0" style="right-[9.7rem] top-[4rem]"></Cart>
        </section>
        <section className="absolute">
          <Cart name="रमेश" style="right-[4.5rem] top-[4rem] w-[60%]">
            <ArrowMark style="left-[1rem] " />
          </Cart>
          <Cart name="भास्कर" style="right-[4.8rem] top-[4rem]" />
        </section>
        <section className="absolute">
          <Cart name="जगदीश" style="right-[rem] top-[4rem]">
            <ArrowMark style="left-[2rem] " />
          </Cart>
          <Cart name="दीपक" style="right-[rem] top-[4rem]" />
        </section>
        <section className="absolute">
          <Cart name="दामोदर" style=" top-[4rem] left-[5rem]">
            <ArrowMark style="left-[1.5rem] h-[1.8rem]" />
            <BigLine style="!w-[6rem] top-[3.3rem] -right-[4rem]  ">
              <ArrowMark style={"right-[0px] top-[1px] "} />
            </BigLine>
          </Cart>
          <div className="absolute top-[8.2rem]">
            <Cart name="जर्नादन" style="left-[4.5rem]"></Cart>
          </div>
          <div className="absolute top-[8.2rem]">
            <Cart name="कमल" style="left-[10rem]"></Cart>
          </div>
        </section>
        <section className="absolute">
          <Cart name="बसन्त 0" style="left-[10.6rem] top-[4rem]"></Cart>
        </section>
      </div>
    </>
  );
}

export default page;
