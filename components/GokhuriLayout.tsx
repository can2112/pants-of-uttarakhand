"use client";
import React from "react";
import Cart from "./Cart";
import ArrowMark from "./ArrowMark";
import BigLine from "./BigLine";
import { useRouter } from "next/navigation";

function GokhuriLayout() {
  const router = useRouter();
  return (
    <div className="flex mt-1 flex-col items-center w-screen h-screen">
      <Cart name="गौरेश्वर मूल पुरुष की 13 पीढी  ">
        <ArrowMark style="left-[5.3rem]" />
      </Cart>
      <Cart name="रामदत्त">
        <ArrowMark style="left-[1.8rem]" />
      </Cart>
      <Cart name="बुद्धिबल्लभ">
        <ArrowMark style="left-[2.3rem]" />
      </Cart>
      <Cart name="शिरोमणि">
        <ArrowMark style="left-[1.9rem]" />
      </Cart>
      <Cart name="गौरीदत्त">
        <ArrowMark style="left-[1.7rem]" />
      </Cart>
      <Cart name="चूड़ामणि">
        <ArrowMark style="left-[2rem]" />
        <BigLine style="top-[3.3rem] -left-20 ">
          <ArrowMark style="left-0 top-[0px]" />
          <ArrowMark style="right-[0px] top-[0px] " />
        </BigLine>
      </Cart>
      <div className=" ">
        <Cart
          name="हरिकृष्ण (मल्ली गौखुरी)  "
          style={"right-[6rem] top-3 z-50"}
          click={true}
          onClick={() => router.push("/gokhuri/malla")}
        />
      </div>
      <div className="relative bottom-11">
        <Cart
          name="रतनमणि (तल्ली गौखुरी ) "
          style={"left-[6rem] z-50"}
          click={true}
          onClick={() => router.push("/gokhuri/talla")}
        />
      </div>
    </div>
  );
}

export default GokhuriLayout;
