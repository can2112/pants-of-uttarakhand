"use client";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container bg-blue-100 p-5  shadow-md h-screen">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">
          Welcome to Our Website
        </h1>
        <p className="text-gray-700">
          Discover a world of valuable information and engaging content. Our
          website is designed with you in mind, providing a seamless and
          enjoyable experience.
        </p>
        <div className="mt-8">
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none transition duration-300"
          >
           Download PDF
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
