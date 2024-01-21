"use client";
import GokhuriLayout from "@/components/GokhuriLayout";
import Navbar from "@/components/Navbar";
import React from "react";

function gokhuri() {
  return (
    <div className="flex  flex-col items-center w-screen h-screen  bg-blue-100 ">
      <Navbar />
      <GokhuriLayout />
    </div>
  );
}

export default gokhuri;
