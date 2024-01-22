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
      <div className="flex mt-1 flex-col items-center w-screen h-screen">
        <Cart name="कमलाकान्त" style="top-[1rem]">
          <ArrowMark style="h-[1.8rem]" />
          <BigLine style="!w-[22rem] top-[3.3rem] -right-[9rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>

        <section className="absolute top-[9.5rem]">
          <Cart name="गंगादत 0 " style="right-[9.5rem] " />
        </section>
        <section className="absolute top-[9.5rem]">
          <Cart name="पुरूषोतम" style="right-[rem] ">
            <ArrowMark style="right-[2rem] " />
            <BigLine style="!w-[24rem] top-[3.3rem] -right-[10rem] ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] "} />
              <ArrowMark style={"right-[7rem] top-[1px] "} />
              <ArrowMark style={"left-[7rem] top-[1px] "} />
            </BigLine>
          </Cart>
          <section className="absolute top-[4rem]">
            <Cart name="गोपालदत" style="right-[10.5rem] ">
              <ArrowMark style="right-[2rem] h-[20rem] " />
              <BigLine style="!w-[22rem] top-[22.3rem] -right-[rem] ">
                <ArrowMark style={"-left-[1px] top-[1px] "} />
                <ArrowMark style={"right-[0px] top-[1px] "} />
                <ArrowMark style={"right-[9rem] top-[1px] "} />
              </BigLine>
            </Cart>
            <div className="absolute top-[23rem]">
              <Cart name="पूरन" style="right-[10.5rem] ">
                <ArrowMark style="right-[1rem]  " />
                <BigLine style="!w-[13rem] top-[3.3rem] -right-[rem] ">
                  <ArrowMark style={"-left-[1px] top-[1px] "} />
                  <ArrowMark style={"right-[0px] top-[1px] "} />
                  <ArrowMark style={"right-[6rem] top-[1px] "} />
                </BigLine>
              </Cart>
              <section className="absolute top-[4.3rem]">
                <Cart name="नवीन  " style="right-[10.2rem]"></Cart>
              </section>
              <section className="absolute top-[4.3rem]">
                <Cart name="राजेन्द्र  " style="right-[5rem]"></Cart>
              </section>

              <section className="absolute top-[4.3rem]">
                <Cart name="हेम  " style="left-[1rem]"></Cart>
              </section>
            </div>
            <div className="absolute top-[23rem]">
              <Cart name="ख्यालीदत्त" style="right-[3rem]] ">
                <ArrowMark style="left-[4rem] h-[7rem] " />
                <BigLine style="!w-[10rem] top-[9.3rem] -right-[5rem]  ">
                  <ArrowMark style={"-left-[1px] top-[1px] "} />
                  <ArrowMark style={"right-[0px] top-[1px] "} />
                </BigLine>
              </Cart>

              <section className="absolute top-[10rem]">
                <Cart name="दीपक" style="right-[2rem]" />
              </section>
              <section className="absolute top-[10rem]">
                <Cart name="कैलाश" style="left-[6.5rem]" />
              </section>
            </div>
            <div className="absolute top-[23rem]">
              <Cart name="गणेश" style="left-[9.8rem] ">
                <ArrowMark style="left-[2rem] h-[rem] " />
                <BigLine style="!w-[8rem] top-[3.3rem] -right-[1rem] ">
                  <ArrowMark style={"-left-[1px] top-[1px] "} />
                  <ArrowMark style={"right-[0px] top-[1px] "} />
                </BigLine>
              </Cart>
              <section className="absolute top-[4rem]">
                <Cart name="चन्द्रशेखर" style="left-[4.8rem]" />
              </section>
              <section className="absolute top-[4rem]">
                <Cart name="कमल" style="left-[11rem]" />
              </section>
            </div>
          </section>
          <section className="absolute top-[4rem]">
            <Cart name="राधाबल्लभ" style="right-[5rem] ">
              <ArrowMark style="right-[2rem] " />
            </Cart>
            <div className="absolute top-[3.4rem]">
              <Cart name="मथुरादत" style="right-[4.5rem] ">
                <ArrowMark style="right-[2rem]  " />
                <BigLine style="!w-[12rem] top-[3.3rem] -right-[5rem] ">
                  <ArrowMark style={"-left-[1px] top-[1px] "} />
                  <ArrowMark style={"right-[0px] top-[1px] "} />
                  <ArrowMark style={"right-[5rem] top-[1px] "} />
                </BigLine>
              </Cart>

              <section className="absolute top-[4rem]">
                <Cart name="सुरेश" style="right-[7.7rem] ">
                  <ArrowMark style="right-[1rem]  " />
                </Cart>
                <Cart name="सुरेश" style="right-[7rem] " />
              </section>
              <section className="absolute top-[4rem]">
                <Cart name="प्रकाश" style="right-[2rem] " />
              </section>
              <section className="absolute top-[4rem]">
                <Cart name="पूरन " style="left-[3rem] " />
              </section>
            </div>
          </section>
          <section className="absolute top-[4rem]">
            <Cart name="पदमादत" style="left-[5rem] ">
              <ArrowMark style="left-[2rem] h-[11rem] " />
              <BigLine style="!w-[15rem] top-[13.5rem] -right-[5rem]  ">
                <ArrowMark style={"-left-[1px] top-[1px] "} />
                <ArrowMark style={"right-[0px] top-[1px] "} />
              </BigLine>
            </Cart>
            <div className="absolute top-[14.2rem]">
              <Cart name="नन्दाबल्लभ" style="right-[2rem] ">
                <ArrowMark style="right-[2rem] " />
              </Cart>
              <Cart name="केवलानन्द" style="right-[2rem] " />
            </div>
            <div className="absolute top-[14.2rem]">
              <Cart name="ख्यालीदत" style="left-[10rem] ">
                <ArrowMark />
                <BigLine style="!w-[8rem] top-[3.3rem] right-[1rem]  ">
                  <ArrowMark style={"-left-[1px] top-[1px] "} />
                  <ArrowMark style={"right-[0px] top-[1px] "} />
                </BigLine>
              </Cart>
              <section className="absolute top-[4rem]">
                <Cart name="दीपक" style="left-[4rem]" />
              </section>
              <section className="absolute top-[4rem]">
                <Cart name="नवीन" style="left-[11rem]" />
              </section>
            </div>
          </section>
          <section className="absolute top-[4rem]">
            <Cart name="रेवाधर" style="left-[11.5rem] ">
              <ArrowMark style="left-[1.5rem] h-[rem] " />
            </Cart>
            <Cart name="रेवाधर" style="left-[11.5rem] " />
          </section>
        </section>
        <section className="absolute top-[9.5rem]">
          <Cart
            name="रामदत"
            style="left-[10rem] z-50"
            click
            onClick={() => router.push("/gokhuri/talla/kamla/ramdatt")}
          />
        </section>
      </div>
    </>
  );
}

export default Page;
