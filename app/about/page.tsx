"use client";
import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-blue-100 p-5 h-screen  shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">About Us</h1>
        <p className="text-gray-700">
          Welcome to our website! We are a passionate team dedicated to
          providing valuable information and services to our users.
        </p>
        <p className="text-gray-700">
          Our mission is to make a positive impact by delivering high-quality
          content and user-friendly experiences. Whether you are a visitor or a
          long-time user, we appreciate your support and engagement.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4 text-blue-800">Our Team</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>John Doe - Founder</li>
          <li>Jane Smith - Developer</li>
          <li>Chris Johnson - Designer</li>
        </ul>
        <p className="text-gray-700">
          Feel free to contact us if you have any questions, suggestions, or if
          you just want to say hello!
        </p>
        <p className="text-blue-800">Contact: info@example.com</p>
      </div>
    </>
  );
};

export default About;
