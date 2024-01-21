"use client";
import Cart from "@/components/Cart";
import { useRouter } from "next/navigation";
import ArrowMark from "@/components/ArrowMark";
import Navbar from "@/components/Navbar";


const App = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="flex py-5 flex-col items-center w-screen h-full  bg-blue-100 ">
        <Cart name={"पण्डित जयदेव (मूल पुरुष)"}>
          <ArrowMark style={"left-[5.3rem]"} />
        </Cart>
        <span />

        <Cart name={"पण्डित रविदेव 2 "}>
          <ArrowMark style={"left-14"} />
        </Cart>
        <Cart name={"पण्डित रामदेव 3"}>
          {" "}
          <ArrowMark style={"left-14"} />
        </Cart>
        <Cart name={"पण्डित भानुदेव 4"}>
          {" "}
          <ArrowMark style={"left-14"} />
        </Cart>
        <Cart name={"पण्डित श्रीधर 5"}>
          <ArrowMark style={"left-[3.3rem]"} />
          <div className="w-[15rem] absolute bg-black  h-1 top-[3.3rem] -left-11 flex justify-between">
            <ArrowMark style={"left-0 top-[0px]"} />
            <ArrowMark style={"right-[0px] top-[0px] "} />
          </div>
        </Cart>
        <div>
          <Cart style={"right-[6.3rem] top-2"} name={"बलभद्र 6"}>
            <ArrowMark style={"left-[2.5rem]"} />
          </Cart>
          <section className="absolute ">
            <Cart
              name={"शिवदेव 7"}
              style={"right-[6.5rem]  text-white"}
              click={true}
              onClick={() => router.push("/shivdev")}
            />
          </section>
        </div>
        <section className="flex justify-center items-center flex-col">
          <Cart
            style={" bottom-12 left-[6.5rem]"}
            name={"श्रीगोपाल (हटवाल) 6 "}
          >
            <ArrowMark style={"left-[4.8rem]"} />
          </Cart>
          <Cart style={" bottom-12 left-[6.5rem]"} name={"वैद्यनाथ 7 "}>
            <ArrowMark style={"left-[2.5rem]"} />
          </Cart>
          <Cart style={" bottom-12 left-[6.5rem]"} name={"देसिक 8 "}>
            <ArrowMark style={"left-[2.5rem]"} />
          </Cart>
          <Cart style={" bottom-12 left-[6.5rem]"} name={"दुर्गादत्त  9"}>
            <ArrowMark style={"left-[2.5rem]"} />
          </Cart>
          <Cart style={" bottom-12 left-[6.5rem]"} name={"गंगाधर 10 "}>
            <ArrowMark style={"left-[2.5rem]"} />
          </Cart>
          <Cart style={" bottom-12 left-[6.5rem]"} name={"जयदेव  11 "}>
            <ArrowMark style={"left-[2.5rem]"} />
          </Cart>
          <Cart
            style={" bottom-12 left-[6.5rem]"}
            name={"मनोरथ (हटवाल राठ) 12 "}
          />
        </section>
      </div>
    </>
  );
};

export default App;
