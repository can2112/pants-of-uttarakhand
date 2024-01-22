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
        <Cart name="पदमादत्त" style={" top-3 "}>
          <ArrowMark style={"left-8 h-[2rem]"} />
          <BigLine style="-bottom-5 w-[18rem] -right-[6rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>

        <section className="absolute top-[10rem]">
          <Cart name="भैरवदत" style="right-[9rem]">
            <ArrowMark style="" />
            <BigLine style="!w-[23rem] top-[3.3rem]  -left-5 ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] "} />
              <ArrowMark style={"right-[6rem] top-[1px] "} />
              <ArrowMark style={"right-[14rem] top-[1px] "} />
            </BigLine>
          </Cart>
          <div className="absolute">
            <Cart name="नन्दकिशोर" style="right-[10.6rem] top-[0.8rem]">
              <ArrowMark style="left-[2.3rem] " />
              <BigLine style="!w-[8rem] top-[3.3rem] -right-[3.6rem]  ">
                <ArrowMark style={"-left-[1px] top-[1px] "} />
                <ArrowMark style={"right-[0px] top-[1px] "} />
              </BigLine>
            </Cart>
            <section className="absolute">
              <Cart name="ईश्वरचन्द्र" style="right-[10.6rem] top-[1.6rem]" />
            </section>
            <section className="absolute">
              <Cart name="चन्द्रप्रकाश" style="right-[5rem] top-[1.6rem]" />
            </section>
          </div>
          <div className="absolute">
            <Cart
              name="रेवाधर"
              style="right-[3rem] top-[0.8rem] z-50"
              click={true}
              onClick={() =>
                router.push(
                  "/gokhuri/malla/premballav/padmadat/bhairavdatt/rebadhar"
                )
              }
            />
          </div>
          <div className="absolute">
            <Cart name="कैलाशचन्द्र" style="left-[3rem] top-[0.8rem]">
              <ArrowMark style="left-[2.3rem] h-[5.7rem]" />
              <BigLine style="!w-[8rem] top-[8rem] right-[1rem]  ">
                <ArrowMark style={"-left-[1px] top-[1px] "} />
                <ArrowMark style={"right-[0px] top-[1px] "} />
              </BigLine>
            </Cart>
            <section className="absolute top-[9.6rem] right-[4rem]">
              <Cart name="चन्द्रशेखर "></Cart>
            </section>
            <section className="absolute top-[9.6rem] left-[4rem]">
              <Cart name="प्रकाशचंद्र "></Cart>
            </section>
          </div>
          <div className="absolute">
            <Cart name="घनश्याम" style="left-[9rem] top-[0.8rem]" />
          </div>
        </section>
        <section className="absolute top-[10rem]">
          <Cart
            name="गोविन्दबल्लभ"
            style="right-[0rem] z-50"
            click={true}
            onClick={() =>
              router.push("/gokhuri/malla/premballav/padmadat/govindballav")
            }
          />
        </section>
        <section className="absolute top-[10rem]">
          <Cart
            name="मथुरादत"
            style="left-[9rem]"
            click={true}
            onClick={() =>
              router.push("/gokhuri/malla/premballav/padmadat/mathuradat")
            }
          />
        </section>
      </div>
    </>
  );
}

export default page;
