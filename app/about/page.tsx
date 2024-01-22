"use client";
import Display from "@/components/Display";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-blue-100 p-5 h-full py-10 shadow-md min-h-screen ">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">About Us</h1>
        <p className="text-gray-700">
          Welcome to our family tree community! We believe in the power of
          connection, roots, and the branches that grow from them. Our family
          tree isn't just a collection of names and dates; it's a living
          testament to the stories, memories, and traditions that bind us
          together.
        </p>
        <h1 className="text-3xl font-bold mb-4 mt-8 text-blue-800">
          Our Roots
        </h1>
        <p className="text-gray-700">
          Our family tree has deep and diverse roots, stretching across
          generations and continents. It's a tapestry woven with the threads of
          love, resilience, and shared experiences. From the oldest branches to
          the newest buds, each member contributes to the unique character of
          our family.
        </p>
        <h1 className="text-3xl font-bold mb-4 mt-8 text-blue-800">
          Branches of Unity
        </h1>
        <p className="text-gray-700">
          Just like the branches of a tree, our family extends in various
          directions, creating a network of relationships and connections. We
          cherish the diversity within our family, recognizing that each branch
          brings something special to the collective identity.
        </p>
        <div className=" w-full py-5  bg-blue-100">
          <h2 className="text-2xl font-bold mt-6 mb-4 text-blue-800">
            Our Team
          </h2>
          <div className="flex flex-col justify-center gap-7">
            <Display
              img={"/shubhash.jpeg"}
              name={"Subhash Pant"}
              role={"Author"}
            />
            <Display
              img={"/santosh.jpeg"}
              name={"Santosh Pant"}
              role={"Compiler"}
            />
            <Display
              img={"/akhilesh.jpeg"}
              name={"Akhilesh Pant"}
              role={"Editor"}
            />
          </div>

          <p className="text-gray-700 mt-4">
            Feel free to contact us if you have any questions, suggestions, or
            if you just want to say hello!
          </p>
          <p className="text-blue-800 py-5">Contact: pantuk1008@gmail.com </p>
        </div>
      </div>
    </>
  );
};

export default About;
