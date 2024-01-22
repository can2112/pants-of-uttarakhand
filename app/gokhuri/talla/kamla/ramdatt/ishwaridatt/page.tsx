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
      <div className="flex mt-1 flex-col items-center w-screen h-screen">
        <Cart name="इश्वरीदत्त" style="">
          <ArrowMark />
          <BigLine style="!w-[20rem] top-[3.3rem] -right-[8.5rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>
        <section className="absolute top-[8.5rem]">
          <Cart name="हरीश" style="right-[9rem] ">
            <ArrowMark style="right-[1.3rem] h-[1.8rem]" />
            <BigLine style="!w-[10rem] top-[3.3rem] -right-[8.5rem] ">
              <ArrowMark style={"right-[0px] top-[1px] "} />
            </BigLine>
          </Cart>

          <div className="absolute">
            <Cart name="मयंक" style="right-[9rem] top-[0.8rem] " />
          </div>
          <div className="absolute">
            <Cart name="मोनू" style="left-[1rem] top-[0.8rem] " />
          </div>
        </section>
        <section className="absolute top-[8.5rem]">
          <Cart name="नित्यानन्द" style="left-[9.4rem] " />
        </section>
      </div>
    </>
  );
}

export default page;
