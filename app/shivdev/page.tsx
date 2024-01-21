"use client";
import ArrowMark from "@/components/ArrowMark";
import BigLine from "@/components/BigLine";
import Cart from "@/components/Cart";
import { useRouter } from "next/navigation";
import React from "react";

function shivdev() {
  const router = useRouter();
  return (
    <div className="flex mt-1 flex-col items-center w-screen h-screen">
      <Cart name={"शिवदेव 7 "}>
        <ArrowMark />
        <BigLine style="!w-[21rem] top-[3.3rem] -left-[8rem]  ">
          <ArrowMark style={"-left-[1px] top-[1px]"} />
          <ArrowMark style={"left-[8rem] top-[1px] "} />
          <ArrowMark style={"right-[7rem] top-[1px] h-[12rem]"} />
          <ArrowMark style={"right-[0px] top-[1px] "} />
        </BigLine>
      </Cart>
      <div className="absolute">
        <Cart name="दामोदर 8" style="right-[8.8rem] top-[4rem]">
          <ArrowMark style="left-[2.5rem]" />
          <BigLine style="!w-[8rem] top-[3.3rem] -left-[.2rem]  ">
            <ArrowMark style={"left-[0px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>
        <section className="absolute">
          <Cart name="गदाधर 9" style="right-[4rem] top-[4.8rem]">
            <ArrowMark style="left-[2.5rem] h-[12rem]" />
          </Cart>
          <BigLine style="!w-[8rem] !top-[19.8rem] -left-[5rem]  ">
            {""}
            <ArrowMark style={"left-[0px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
          <div className="absolute">
            <Cart
              name="श्रीनाथ (राठ) 10"
              style="-left-[9.2rem] top-[16.8rem] whitespace-nowrap"
            ></Cart>
            <Cart
              name="माधव (राठ) 10"
              style="-left-[0.9rem] top-[13.8rem] whitespace-nowrap"
            ></Cart>
          </div>
          <div className="absolute"></div>
        </section>
        <section className="absolute">
          <div>
            <Cart name="गोविंद 9" style="-left-[9.2rem] top-[4.8rem]">
              <ArrowMark style="left-[1.8rem]" />
            </Cart>
          </div>

          <Cart name="केशव 10" style="-left-[9.2rem] top-[4.8rem]">
            <ArrowMark style="left-[1.8rem]" />
          </Cart>
          <div>
            <Cart
              name="हरिशर्मा शर्म राठ 11"
              style="-left-[8.5rem] top-[4.8rem]  "
            />
          </div>
        </section>
      </div>
      <div className="absolute">
        <Cart
          name="भानुदेव 8"
          style={"right-[2rem] top-[4rem] z-50"}
          click={true}
          onClick={() => router.push("/bhanudev")}
        ></Cart>
      </div>

      <section className="">
        <Cart name="शम्भुदेव 8" style={"left-[4rem] top-[4rem]"} />

        <Cart name="धर्मदास 9" style={"left-[4rem] top-[4rem]"} />

        <Cart name="भवदास (राठ) 11" style={"left-[4rem] top-[4rem]"} />
      </section>
      <section className="absolute ">
        <Cart name="ब्रह्मदेव 8" style={"left-[11rem] top-[4rem] w-1/2"}>
          <ArrowMark style="left-[2.5rem] h-[23rem]" />
        </Cart>
        <Cart name="आनंददेव 9" style={"left-[10rem] top-[15.5rem] w-[60%]"} />

        <Cart
          name="गौतम (राठ) 10"
          style={"left-[6.9rem] top-[22.5rem] whitespace-wrap"}
          click={true}
          onClick={() => router.push("/gotam")}
        />
      </section>
    </div>
  );
}

export default shivdev;
