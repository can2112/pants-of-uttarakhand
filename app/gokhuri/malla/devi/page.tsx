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
      <div className="flex  flex-col items-center w-screen h-screen  bg-blue-100">
        <Cart name="देवीदत्त">
          <ArrowMark style="right-6" />
        </Cart>
        <Cart name="तारादत्त">
          <ArrowMark style="right-6 h-[2rem]" />
          <BigLine style="!w-[16rem] top-[3.3rem] -right-[6rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>
        <section className="absolute top-[11.7rem] ">
          <Cart name="शिवदत्त " style="right-[8rem]">
            <ArrowMark style="right-6 " />
            <BigLine style="!w-[20rem] top-[3.3rem] -right-[rem] ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] "} />
              <ArrowMark style={"left-[7rem] top-[1px] "} />
              <ArrowMark style={"right-[6rem] top-[1px] "} />
            </BigLine>
          </Cart>
          <div className="absolute ">
            <Cart name="रघुवरदत्त" style="right-[10rem] top-[0.8rem]">
              <ArrowMark style="left-[1.4rem] h-[9rem]" />
              <BigLine style="!w-[10rem] top-[11.5rem]   ">
                <ArrowMark style={"-left-[1px] top-[1px] "} />
                <ArrowMark style={"left-[5rem] top-[1px] "} />
                <ArrowMark style={"right-[0px] top-[1px] "} />
              </BigLine>
            </Cart>
            <section className="absolute top-[11.7rem] ">
              <Cart
                name="हरीश"
                style="right-[10rem] top-[1.6rem] whitespace-nowrap"
              />
            </section>
            <section className="absolute top-[11.7rem] left-5">
              <Cart
                name="हेम"
                style="right-[7rem] top-[1.6rem] whitespace-nowrap"
              />
            </section>
            <section className="absolute top-[11.7rem] left-5">
              <Cart
                name="गोकुल"
                style="right-[2rem] top-[1.6rem] whitespace-nowrap"
              />
            </section>
          </div>
          <div className="absolute">
            <Cart
              name="दिनेश चन्द्र"
              style="right-[3rem] top-[0.8rem] whitespace-nowrap"
            >
              <ArrowMark style="left-[2.3rem] h-[5rem]" />
              <BigLine style="!w-[14rem] top-[7.3rem] -right-[8rem]  ">
                <ArrowMark style={"-left-[1px] top-[1px] "} />
                <ArrowMark style={"right-[0px] top-[1px] "} />
                <ArrowMark style={"left-[7rem] top-[1px] "} />
              </BigLine>
            </Cart>
            <section className="absolute top-[9rem] ">
              <Cart name="कैलाश" style="right-[7rem]"></Cart>
            </section>
            <section className="absolute top-[9rem] ">
              <Cart name="सुभाष" style="left-[1rem]"></Cart>
            </section>
            <section className="absolute top-[9rem] ">
              <Cart name="प्रकाश" style="left-[8rem]"></Cart>
            </section>
          </div>
          <div className="absolute">
            <Cart
              name="भुवन चन्द्र"
              style="left-[4rem] top-[0.8rem] whitespace-nowrap"
            >
              <ArrowMark style="left-[2.3rem] " />
            </Cart>
            <Cart
              name="सतीश"
              style="left-[4rem] top-[0.8rem] whitespace-nowrap text-center"
            />
          </div>
          <div className="absolute">
            <Cart
              name="पूरन चन्द्र"
              style="left-[10rem] top-[0.8rem] whitespace-nowrap"
            >
              <ArrowMark style="left-[2.3rem] h-[15rem] " />
              {/* <BigLine style="!w-[4rem] top-[18rem] ">{""}</BigLine> */}
              <div className="w-[7.6rem] absolute bg-black top-[17.5rem]  h-1  -left-[5rem] flex justify-between">
                <ArrowMark style={"left-0 top-[0px]"} />
                <ArrowMark style={"right-[0px] top-[0px] "} />
              </div>
            </Cart>
            <section className="absolute top-[17.4rem]">
              <Cart
                name="दीपक"
                style="left-11 top-[1.6rem] whitespace-nowrap"
              />
            </section>
            <section className="absolute top-[17.4rem]">
              <Cart
                name="अमित"
                style="left-[10rem] top-[1.6rem] whitespace-nowrap"
              />
            </section>
          </div>
        </section>
        <section className="absolute top-[11.7rem] ">
          <Cart
            name="चरणदत्त "
            style="left-0 z-50"
            click={true}
            onClick={() => router.push("/gokhuri/malla/devi/charan")}
          />
        </section>
        <section className="absolute top-[11.7rem] ">
          <Cart name="सदानन्द 0 " style="left-[8rem]"></Cart>
        </section>
      </div>
    </>
  );
}

export default page;
