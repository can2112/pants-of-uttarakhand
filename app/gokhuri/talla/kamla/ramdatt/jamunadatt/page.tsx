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
        <Cart name="जमुनादत" style="">
          <ArrowMark />
          <div className="w-[24rem] absolute bg-black  h-1 top-[3.3rem] -left-[10rem] flex justify-between">
            <ArrowMark style={"left-0 top-[0px]"} />
            <ArrowMark style={"right-[0px] top-[0px] "} />
            <ArrowMark style={"right-[10rem] top-[0px] "} />
            <ArrowMark style={"left-[7rem] top-[0px] "} />
          </div>
        </Cart>

        <section className="absolute top-[8.5rem]">
          <Cart name="लक्ष्मीदत" style="right-[10.4rem] ">
            <ArrowMark style="right-[2.3rem] h-[1.8rem]" />
          </Cart>
          <Cart name="गौरव" style="right-[10.4rem] " />
        </section>
        <section className="absolute top-[8.5rem]">
          <Cart name="टीकाराम" style="right-[4.4rem] ">
            <ArrowMark style="right-[2.3rem] " />
          </Cart>
          <Cart name="भास्कर" style="right-[4.4rem] " />
        </section>
        <section className="absolute top-[8.5rem]">
          <Cart name="लीलाधर" style="left-[2.4rem] ">
            <ArrowMark style="left-[2rem] " />
          </Cart>
          <Cart name="संतोष" style="left-[2.4rem] " />
        </section>
        <section className="absolute top-[8.5rem]">
          <Cart name="भुवन" style="left-[10.8rem] ">
            <ArrowMark style="left-[1.2rem] h-[5.8rem]" />
            <BigLine style="!w-[8rem] top-[7.3rem] right-[1.2rem] ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
            </BigLine>
          </Cart>
          <div className="absolute top-[8.2rem]">
            <Cart name="नीरज" style="left-[3rem] " />
          </div>
          <div className="absolute top-[8.2rem]">
            <Cart name="हिमांशु " style="left-[10rem] " />
          </div>
        </section>
      </div>
    </>
  );
}

export default page;
