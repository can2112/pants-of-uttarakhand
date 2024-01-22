"use client";
import ArrowMark from "@/components/ArrowMark";
import BigLine from "@/components/BigLine";
import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

function Laxmi() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="flex  flex-col items-center w-screen h-screen  bg-blue-100">
        <Cart name="लक्ष्मीदत्त">
          <ArrowMark style="right-7 h-[1.8rem] " />
          <BigLine style="!w-[22rem] top-[3.3rem] -right-[9rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>
        <section className="absolute top-[8rem] ">
          <Cart name="टीकाराम 0" style=" right-[10rem]"></Cart>
        </section>
        <section className="absolute top-[8rem] ">
          <Cart name="गंगादत">
            <ArrowMark style="right-7  h-[1.8rem] " />
            <BigLine style="!w-[24rem] top-[3.3rem] -right-[10.5rem] ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] "} />
              <ArrowMark style={"left-[6rem] top-[1px] "} />
              <ArrowMark style={"right-[7rem] top-[1px] "} />
            </BigLine>
          </Cart>

          <div className="absolute">
            <Cart name="भुवन" style="top-3 right-[10.8rem]">
              <ArrowMark style="left-[0.6rem] h-[5.8rem] " />
              <BigLine style="!w-[22rem] top-[7.3rem] -right-[20rem]  ">
                <ArrowMark style={"right-[0px] top-[1px] "} />
                <ArrowMark style={"left-[5rem] top-[1px] "} />
                <ArrowMark style={"right-[6rem] top-[1px] "} />
                <ArrowMark style={"left-[11rem] top-[1px] "} />
              </BigLine>
            </Cart>
            <section className="absolute top-[9rem]">
              <Cart name="पूरन 0 " style="right-[10.6rem] whitespace-nowrap" />
            </section>
            <section className="absolute top-[9rem]">
              <Cart name="भूपेन्द " style="right-[6rem] whitespace-nowrap">
                <ArrowMark style="left-[1rem]  " />
              </Cart>
              <Cart name="भरत " style="right-[6rem] whitespace-nowrap" />
            </section>
            <section className="absolute top-[9rem]">
              <Cart name="जगन्नाथ " style=" whitespace-nowrap right-5" />
            </section>
            <section className="absolute top-[9rem]">
              <Cart name="हेम  " style=" whitespace-nowrap left-[5rem]" />
            </section>
            <section className="absolute top-[9rem]">
              <Cart name="जगन्नाथ " style=" whitespace-nowrap left-[10rem]" />
            </section>
          </div>
          <div className="absolute">
            <Cart
              name="हरगोविन्द"
              style="top-3 right-[7.7rem] z-50"
              click={true}
              onClick={() => router.push("/gokhuri/malla/lakshmi/hargovind")}
            />
          </div>
          <div className="absolute">
            <Cart name="परमानन्द" style="top-3 right-[1.5rem]">
              <ArrowMark style="right-[rem]  " />
            </Cart>
            <Cart name="प्रकाश" style="top-3 right-[1rem] z-50" />
          </div>
          <div className="absolute">
            <Cart
              name="देवीदत"
              style="top-3 left-[3.8rem] z-50"
              click
              onClick={() => router.push("/gokhuri/malla/lakshmi/devidatt")}
            />
          </div>
          <div className="absolute">
            <Cart
              name="धरणीधर"
              style="top-3 left-[9rem] z-50"
              click
              onClick={() => router.push("/gokhuri/malla/lakshmi/dharanidhar")}
            />
          </div>
        </section>
        <section className="absolute top-[8rem] ">
          <Cart name="लीलाधर 0 " style="left-[10rem]"></Cart>
        </section>
      </div>
    </>
  );
}

export default Laxmi;
