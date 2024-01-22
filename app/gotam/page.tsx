"use client";
import ArrowMark from "@/components/ArrowMark";
import BigLine from "@/components/BigLine";
import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="flex py-4 flex-col items-center w-screen h-screen  bg-blue-100 ">
        <Cart name="गौतम 10">
          <ArrowMark style="left-[2rem]" />
          <BigLine style="!w-[15rem] top-[3.3rem] -left-[5rem]  ">
            <ArrowMark style={"-left-[1px] top-[1px]"} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>

        <section className="absolute">
          {" "}
          <Cart name="विश्वरूप 11" style="left-[8rem] top-16">
            <ArrowMark style="left-[2.3rem] " />
          </Cart>
          <Cart name="प्रयोधर 12" style="left-[8rem] top-16">
            <ArrowMark style="left-[2.3rem] h-28 " />
          </Cart>
          <Cart name="दलपति  13" style="left-[8rem] top-36">
            <ArrowMark style="left-[2.3rem]  " />
            <BigLine style="!w-[8rem] top-[3.3rem] -right-[0.1rem]  ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] "} />
            </BigLine>
          </Cart>
          <div className="absolute">
            <Cart name="दिनकर रिखाड़ी 14" style="left-[1rem] top-[9.8rem]" />
          </div>
          <div className="absolute">
            <Cart name="हरिदत्त खाड़ी 14" style="left-[8.5rem] top-[9.8rem]" />
          </div>
        </section>
        <section className="absolute">
          <Cart name="हरदत्त 11" style="right-[7.6rem] top-16">
            <ArrowMark style="left-[4rem]" />
            <BigLine style="!w-[8rem] top-[3.3rem] left-[1rem]  ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] "} />
            </BigLine>
          </Cart>
          <Cart name="शिवदत्त रिखाड़ी 12 " style="right-[0rem] top-[5rem]" />
          <Cart name="जयराम  12" style="right-[7.4rem] w-[70%] top-8">
            <ArrowMark style="left-[2.3rem] " />
            <BigLine style="!w-[12rem] top-[3.3rem] left-[1rem]  ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px]"} />
            </BigLine>
          </Cart>
        </section>
        <div className="absolute">
          <Cart name="चिंतामणि रिखाड़ी  13" style="left-[3rem] top-[12rem]" />
        </div>
        <div className="absolute">
          <Cart
            name="गौरेश्वर गौखुरी  13"
            style="right-[6.7rem] top-[12rem]"
            click={true}
            onClick={() => router.push("/gokhuri")}
          />
        </div>
      </div>
    </>
  );
}

export default Page;
