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
      <div className="flex  flex-col items-center  py-4 w-screen h-screen  bg-blue-100">
        <Cart name="पीताम्बरदत" style={" top-3 "}>
          <ArrowMark style="left-12 h-[2rem]" />
          <BigLine style="-bottom-5 w-[18rem] -right-[6rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>
        <section className="absolute top-[10rem]">
          <Cart name="प्रयागदत" style="right-[9rem]">
            <ArrowMark style="" />
            <BigLine style="!w-[12rem] top-[3.3rem]   ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] "} />
              <ArrowMark style={"right-[5rem] top-[1px] "} />
            </BigLine>
          </Cart>
          <div className="absolute">
            <Cart name="कौस्तुभानन्द" style="right-[10rem] top-[0.8rem]" />
          </div>

          <div className="absolute">
            <Cart name="कमल" style="right-[3rem] top-[0.8rem]" />
          </div>
          <div className="absolute">
            <Cart name="राजेश" style="left-[2rem] top-[0.8rem]" />
          </div>
        </section>
        <section className="absolute top-[10rem]">
          <Cart name="चन्द्रशेखर" style="left-3" />
        </section>
        <section className="absolute top-[10rem]">
          <Cart name="महेशचन्द्र" style="left-[8rem]" />
        </section>
      </div>
    </>
  );
}

export default page;
