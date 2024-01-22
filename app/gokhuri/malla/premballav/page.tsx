"use client";
import ArrowMark from "@/components/ArrowMark";
import BigLine from "@/components/BigLine";
import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="flex  flex-col items-center py-4 w-screen h-screen  bg-blue-100">
        <Cart name="प्रेमबल्लभ" style={" top-3 "}>
          <ArrowMark style="left-[2.2rem] h-8" />
          <BigLine style="-bottom-5 w-[18rem] -right-[6rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>

        <section className="absolute">
          <Cart name="नारायणदत" style="right-[9rem] top-[5rem]">
            <ArrowMark style="left-[2.3rem] " />
            <BigLine style="!w-[13rem] top-[3.3rem] -right-[9rem]  ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] "} />
            </BigLine>
          </Cart>
          <section className="absolute right-[12rem] top-[5.2rem]">
            <Cart name="लोकमणि" style="left-[2rem] top-[4rem]">
              <ArrowMark style="left-[2.3rem] " />
              <BigLine style="!w-[8rem] top-[3.3rem] -right-[6rem]  ">
                <ArrowMark style={"-left-[1px] top-[1px] "} />
                <ArrowMark style={"right-[0px] top-[1px] "} />
              </BigLine>
            </Cart>
            <div className="absolute">
              <Cart name="रमेशचन्द" style="left-[3rem] top-[4.7rem]">
                <ArrowMark />
                <BigLine style="!w-[8rem] top-[3.3rem] -right-[3rem]  ">
                  <ArrowMark style={"-left-[1px] top-[1px] "} />
                  <ArrowMark style={"right-[0px] top-[1px] "} />
                </BigLine>
              </Cart>
              <div className="absolute -right-[1rem] top-[9rem]">
                <Cart name="गिरीशचन्द" style="left-5" />
              </div>
              <div className="absolute left-[8rem] top-[9rem]">
                <Cart name="मनोज" />
              </div>
            </div>
            <div className="absolute">
              <Cart name="हेमचन्द" style="left-[10rem] top-[4.7rem]">
                <ArrowMark style="left-12 h-[8rem]" />
                <BigLine style="!w-[8rem] top-[9.4rem] -right-[7.5rem] ">
                  <ArrowMark style={"right-[0px] top-[1px] "} />
                </BigLine>
              </Cart>
              <section className="absolute top-[15rem] left-[11rem]">
                <Cart name="पंकज"></Cart>
              </section>
              <section className="absolute top-[15rem] left-[19rem]">
                <Cart name="सागर"></Cart>
              </section>
            </div>
          </section>
          <section className="absolute">
            <Cart
              name="पीताम्बरदत"
              style="left-[4rem] top-[5.7rem] z-50"
              click={true}
              onClick={() => router.push("/gokhuri/malla/premballav/pitambar")}
            />
          </section>
        </section>
        <section className="absolute">
          <Cart
            name="पदमादत्त"
            style="right-[0rem] top-[5rem] z-50"
            click={true}
            onClick={() => router.push("/gokhuri/malla/premballav/padmadat")}
          />
        </section>
        <section className="absolute">
          <Cart name="दुर्गादत 0" style="left-[8rem] top-[5rem]" />
        </section>
      </div>
    </>
  );
}

export default page;
