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
        <Cart name="हरिकृष्ण (मल्ली गोखुरी) " style={" top-3 "}>
          <ArrowMark style="left-20" />
          <BigLine style="!w-[8rem] top-[3.3rem] left-[1rem]  ">
            <ArrowMark style={"-left-[1px] top-[1px]"} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>
        <div className="absolute">
          <Cart name="जयराम 0" style="left-[5rem] top-[5rem]" />
        </div>
        <div className="absolute">
          <Cart name="लक्ष्मीनिधि" style="right-[5rem] top-[5rem]">
            <ArrowMark style="left-[2.3rem] " />
            <BigLine style="!w-[23rem] top-[3.3rem] -right-[14rem]  ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[6rem] top-[1px] "} />
              <ArrowMark style={"left-[8rem] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] h-[5rem] "} />
            </BigLine>
          </Cart>
          <section className="absolute right-48">
            <Cart name="श्रीकृष्ण" style="left-[1rem] top-[5.8rem]">
              <ArrowMark style="left-[3.3rem] h-20 " />
              <BigLine style="!w-[10rem] top-[7.5rem]   ">
                <ArrowMark style={"-left-[1px] top-[1px] "} />
                <ArrowMark style={"right-[0px] top-[1px] "} />
              </BigLine>
            </Cart>
            <div className="absolute">
              <Cart
                name="रूद्रदत 0"
                style="left-[1rem] top-[10.6rem] whitespace-nowrap"
              />
            </div>
            <div className="absolute">
              <Cart
                name="चन्द्रशेखर "
                style="left-[9rem] top-[10.6rem] whitespace-nowrap"
              >
                <ArrowMark style="left-[2.3rem h-7" />
                <BigLine style="!w-[22rem] top-[3.3rem] -right-[10rem]  ">
                  <ArrowMark style={"-left-[1px] top-[1px] "} />
                  <ArrowMark style={"-right-[1px] top-[1px] "} />
                </BigLine>
              </Cart>
              <section className="absolute top-[10rem]">
                <Cart name="नन्दकिशोर" style="left-[1rem] top-[4.7rem]">
                  <ArrowMark style="left-[2.3rem] " />
                </Cart>
                <Cart name="भगवती" style="left-[1.5rem] top-[4.7rem] w-[70%]" />
              </section>
              <section className="absolute top-[10rem]">
                <Cart name="रामचन्द्र" style="left-[9rem] top-[4.7rem]">
                  <ArrowMark style="left-[1.9rem] h-24" />
                  <BigLine style="!w-[17rem] top-[7.5rem] -right-[7rem]  ">
                    <ArrowMark style={"-left-[1px] top-[1px] "} />
                    <ArrowMark style={"right-[0px] top-[1px] "} />
                  </BigLine>
                </Cart>

                <div className="absolute top-[13rem] left-1">
                  <Cart name="गिरीश" style="left-[1.5rem] " />
                </div>
                <div className="absolute top-[13rem] left-[8rem]">
                  <Cart name="भुवन" style="left-[1.5rem] " />
                </div>
                <div className="absolute top-[13rem] left-[17rem]">
                  <Cart name="परमप्रसाद" style="left-[1.5rem] " />
                </div>
              </section>
              <section className="absolute top-[10rem] left-[20rem]">
                <Cart name="त्रिलोचन" style="left-[1rem] top-[4.7rem]">
                  <ArrowMark style="left-[3rem] h-[13rem] " />
                  <BigLine style="!w-[8rem] top-[14.5rem] right-[1rem]  ">
                    <ArrowMark style={"-left-[1px] top-[1px] "} />
                  </BigLine>
                </Cart>
                <div className="absolute top-[20rem]">
                  <Cart name="कैलाश " style="left-8"></Cart>
                </div>
                <div className="absolute top-[20rem]">
                  <Cart name="जगदीश " style="right-20">
                    <ArrowMark style="left-[1.6rem] " />
                    <BigLine style="!w-[8rem] top-[3.3rem] -left-[2rem]  ">
                      <ArrowMark style={"-left-[1px] top-[1px] "} />
                      <ArrowMark style={"right-[0px] top-[1px] "} />
                    </BigLine>
                  </Cart>

                  <div className="absolute top-[4rem] left-1">
                    <Cart name="भानू" style="left-[rem] " />
                  </div>
                  <div className="absolute top-[4rem] left-1">
                    <Cart name="आशू" style="right-[8rem] " />
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section className="absolute right-14">
            <Cart
              name="प्रेमबल्लभ"
              style="left-[2rem] top-[5.5rem] z-50"
              click={true}
              onClick={() => router.push("/gokhuri/malla/premballav")}
            />
          </section>
          <section className="absolute right-14 top-[9rem]">
            <Cart
              name="देवीदत्त"
              style="left-[11rem] bottom-[0rem] z-50"
              click={true}
              onClick={() => router.push("/gokhuri/malla/devi")}
            />
          </section>
          <section className="absolute right-[3rem] top-[8.6rem]">
            <Cart
              name="लक्ष्मीदत्त"
              style="left-[12.4rem] top-[4rem] z-50"
              click={true}
              onClick={() => router.push("/gokhuri/malla/lakshmi")}
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default page;
