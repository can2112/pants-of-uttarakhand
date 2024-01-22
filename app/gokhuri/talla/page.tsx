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
      <div className="flex  flex-col items-center w-screen h-screen  bg-blue-100">
        <Cart name="रतनमणि (तल्ली गोखुरी )">
          <ArrowMark style="right-[4.5rem] h-[1.8rem]" />
          <BigLine style="!w-[22rem] top-[3.3rem] -right-[6rem] ">
            <ArrowMark style={"-left-[1px] top-[1px] "} />
            <ArrowMark style={"right-[0px] top-[1px] "} />
          </BigLine>
        </Cart>

        <section className="absolute top-[8.2rem]">
          <Cart name="कृष्णदेव 0" style="right-[9rem] " />
        </section>
        <section className="absolute top-[8.2rem]">
          <Cart name="दिनमणि" style="left-[.5rem] ">
            <ArrowMark style="right-[2rem] " />
            <BigLine style="!w-[18rem] top-[3.3rem] -right-[6rem] ">
              <ArrowMark style={"-left-[1px] top-[1px] "} />
              <ArrowMark style={"right-[0px] top-[1px] "} />
            </BigLine>
          </Cart>
          <div className="absolute top-16">
            <Cart name="पदमपति " style="right-[9rem] ">
              <ArrowMark style="right-6 h-[1.8rem]" />
              <BigLine style="!w-[20rem] top-[3.3rem] left-[1.6rem] ">
                <ArrowMark style={"right-[9rem] top-[1px] "} />
                <ArrowMark style={"right-[0px] top-[1px] "} />
              </BigLine>
            </Cart>
            <section className="absolute top-[4.3rem]">
              <Cart name="दतराम " style="right-[9rem] ">
                <ArrowMark style="right-[2rem] h-[1.8rem]" />
              </Cart>
              <Cart name="काशीराम " style="right-[9rem] ">
                <ArrowMark style="right-[2rem] h-[1.8rem]" />
              </Cart>
              <Cart name="कृष्णानन्द " style="right-[9rem] ">
                <ArrowMark style="right-[2rem] " />
                <BigLine style="!w-[10rem] top-[3.3rem] -right-[5rem] ">
                  <ArrowMark style={"-left-[1px] top-[1px] "} />
                  <ArrowMark style={"right-[0px] top-[1px] "} />
                </BigLine>
              </Cart>
              <div className="absolute ">
                <Cart name="मोहनचंद्र" style="top-[0.5rem] right-[10rem]">
                  <ArrowMark style="right-[2rem] " />
                </Cart>
                <Cart name="गोकुलानन्द" style="top-[0.5rem] right-[10rem]" />
              </div>
              <div className="absolute ">
                <Cart name="चन्द्रशेखर" style="top-[0.5rem] right-6">
                  <ArrowMark style="right-[2rem] " />
                </Cart>
                <Cart name="बसन्तबल्लभ" style="top-[0.5rem] right-6" />
              </div>
            </section>
            <section className="absolute top-[4.3rem]">
              <Cart name="भवानीदत " style="left-[1.5rem] ">
                <ArrowMark style="right-[3px] h-[16rem] " />
                <BigLine style="!w-[10rem] top-[18.5rem] -right-[5rem] ">
                  <ArrowMark style={"-left-[1px] top-[1px] "} />
                  <ArrowMark style={"right-[0px] top-[1px] "} />
                </BigLine>
                {/* <BigLine style="!w-[20rem] top-[18.5rem] -right-[5rem] ">
								<ArrowMark style={"-left-[1px] top-[1px] "} />
								<ArrowMark style={"right-[0px] top-[1px] "} />
								<ArrowMark style={"left-[7rem] top-[1px] "} />
							</BigLine> */}
              </Cart>

              <section className="absolute top-[19.5rem] ">
                <Cart name="चन्द्रदत0 " style="right-[1rem] " />
              </section>
              <section className="absolute top-[19.5rem] ">
                <Cart name="मनोरथ " style="left-[8.5rem] ">
                  <ArrowMark style="right-[2rem] h-[1.8rem] " />
                  <BigLine style="!w-[18rem] top-[3.3rem] right-[2rem] ">
                    <ArrowMark style={"-left-[1px] top-[1px] "} />
                    <ArrowMark style={"right-[7rem] top-[1px] "} />
                  </BigLine>
                </Cart>
                <div className="absolute top-[4.2rem]">
                  <Cart name="पूरन" style="right-[10rem]">
                    <ArrowMark style="right-[1rem] h-[1.8rem] " />
                  </Cart>
                  <Cart name="नवीन" style="right-[10rem]" />
                </div>
                <div className="absolute top-[4.2rem]">
                  <Cart name="हरीश" style="left-4">
                    <ArrowMark style="right-[1.3rem]  " />
                    <BigLine style="!w-[10rem] top-[3.3rem] -right-[2rem] ">
                      <ArrowMark style={"-left-[1px] top-[1px] "} />
                      <ArrowMark style={"right-[0px] top-[1px] "} />
                    </BigLine>
                  </Cart>
                  <section className="absolute top-[4rem]">
                    <Cart name="गणेशदत" style="right-[5rem]" />
                  </section>
                  <section className="absolute top-[4rem]">
                    <Cart name="भुवन" style="left-[5rem]" />
                  </section>
                </div>
                <div className="absolute top-[4.2rem]">
                  <Cart name="गोविन्दबल्लभ" style="left-[8rem]">
                    <ArrowMark style="right-[1.3rem] h-[6rem] " />
                    <BigLine style="!w-[10rem] top-[8.3rem] right-[1.3rem] ">
                      <ArrowMark style={"-left-[1px] top-[1px] "} />
                      <ArrowMark style={"right-[0px] top-[1px] "} />
                    </BigLine>
                  </Cart>
                  <section className="absolute top-[1rem]">
                    <Cart name="विनोद" style="left-[1rem] top-[8.3rem]">
                      <ArrowMark style="left-[2.3rem] h-[1.8rem]" />
                      <BigLine style="!w-[15rem] top-[3.3rem] -right-[7rem]  ">
                        <ArrowMark style={"-left-[1px] top-[1px] "} />
                        <ArrowMark style={"right-[0px] top-[1px] "} />
                      </BigLine>
                    </Cart>

                    <section className="absolute top-[12.5rem]">
                      <Cart name="अखिलेश" style="right-[6rem]" />
                    </section>
                    <section className="absolute top-[12.5rem]">
                      <Cart name="विनय" style="left-[2rem]" />
                    </section>
                    <section className="absolute top-[12.5rem]">
                      <Cart name="चन्द्रेश" style="left-[9rem]" />
                    </section>
                  </section>
                  <section className="absolute top-[1rem]">
                    <Cart name="कैलाश" style="left-[10rem] top-[8.3rem]" />
                  </section>
                </div>
              </section>
            </section>
            <section className="absolute top-[4.3rem]">
              <Cart name="श्रीकृष्ण " style="left-[10rem] ">
                <ArrowMark style="left-[2.2rem] " />
              </Cart>
              <Cart name="कृष्ण " style="left-[10rem] ">
                <ArrowMark style="left-[2.2rem] " />
              </Cart>
              <Cart
                name="दुर्गादत 0 "
                style="left-[10rem] whitespace-nowrap "
              />
            </section>
          </div>
          <div className="absolute top-16">
            <Cart
              name="कमलाकान्त "
              style="left-[7rem] z-50"
              click
              onClick={() => router.push("/gokhuri/talla/kamla")}
            />
          </div>
        </section>
        <section className="absolute top-[8.2rem]">
          <Cart name="गदाधर 0" style="left-[9.5rem] " />
        </section>
      </div>
    </>
  );
}

export default Page;
