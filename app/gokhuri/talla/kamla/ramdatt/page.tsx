"use client";
import ArrowMark from "@/components/ArrowMark";
import BigLine from "@/components/BigLine";
import Cart from "@/components/Cart";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();
  return (
    <div className="flex mt-1 flex-col items-center w-screen h-screen">
      <Cart name="रामदत">
        <ArrowMark style="left-[1.5rem] " />
        <BigLine style="!w-[24rem] top-[3.3rem] -right-[10.5rem] ">
          <ArrowMark style={"-left-[1px] top-[1px] "} />
          <ArrowMark style={"right-[0px] top-[1px] "} />
          <ArrowMark style={"left-[8rem] top-[1px] "} />
          <ArrowMark style={"right-[8rem] top-[1px] "} />
        </BigLine>
      </Cart>
      <section className="absolute top-[4.5rem]">
        <Cart name="गोविन्द" style="right-[10.4rem]">
          <ArrowMark style="left-[1.5rem] h-[1.8rem] " />
          <BigLine style="!w-[13rem] top-[3.3rem] -right-[11.1rem] ">
            <ArrowMark style={"left-[6rem] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
          <div className="absolute top-[3.8rem]">
            <Cart name="नन्दाबल्लभ" style="right-[1.4rem]">
              <ArrowMark style="left-[1.5rem] h-[5rem] " />
              <BigLine style="!w-[10rem] top-[7.3rem] -right-[rem] ">
                <ArrowMark style={"left-[1px] top-[1px] "} />
                <ArrowMark style={"right-[0px] top-[1px] "} />
              </BigLine>
            </Cart>
            <div className="absolute top-[8rem]">
              <Cart name="भरत" style="right-[1.4rem]" />
            </div>
            <div className="absolute top-[8rem]">
              <Cart name="कृष्णानन्द" style="left-[7.4rem]" />
            </div>
          </div>
          <div className="absolute top-[3.8rem]">
            <Cart name="चरणदत" style="left-[4.8rem]">
              <ArrowMark style="right-[1.5rem] h-[1.8rem] " />
            </Cart>
            <Cart name="अभिजित" style="left-[4.8rem]" />
          </div>
          <div className="absolute top-[3.8rem]">
            <Cart name="रमेश" style="left-[11.4rem]">
              <ArrowMark style="right-[1.5rem] h-[1.8rem] " />
            </Cart>
            <Cart name="कमलेश" style="left-[11.4rem]" />
          </div>
        </Cart>
      </section>
      <section className="absolute top-[4.5rem]">
        <Cart
          name="ईश्वरीदत"
          style="right-[3.8rem] z-50"
          click
          onClick={() =>
            router.push("/gokhuri/talla/kamla/ramdatt/ishwaridatt")
          }
        />
      </section>
      <section className="absolute top-[4.5rem]">
        <Cart
          name="जमुनादत"
          style="left-[4.4rem] z-50"
          click
          onClick={() => router.push("/gokhuri/talla/kamla/ramdatt/jamunadatt")}
        />
      </section>
      <section className="absolute top-[4.5rem]">
        <Cart name="जईदत" style="left-[10.8rem]">
          <ArrowMark style="right-[1.5rem] h-[1.8rem] " />
          <BigLine style="!w-[6rem] top-[4.3rem] -left-[3rem] ">
            <ArrowMark style={"left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>
        <div className="absolute top-[5rem]">
          <Cart name="दिनेश" style="left-[6.7rem]" />
        </div>
        <div className="absolute top-[5rem]">
          <Cart name="राजेन्द्र" style="left-[11rem]" />
        </div>
      </section>
    </div>
  );
}

export default Page;
