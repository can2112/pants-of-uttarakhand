"use client";
import GokhuriLayout from "@/components/GokhuriLayout";
import { useRouter } from "next/navigation";
import React from "react";

function gokhuri() {
  return (
    <div className="flex mt-1 flex-col items-center w-screen h-screen">
      <GokhuriLayout />
    </div>
  );
}

export default gokhuri;
