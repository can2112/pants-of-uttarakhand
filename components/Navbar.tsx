import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

function Navbar() {
  const router = useRouter();
  return (
    <div className="bg-blue-300/50 h-16 w-screen text-black flex justify-center] justify-between items-center px-4 font-bold">
      <IoArrowBack size={30} color="darkblue" onClick={() => router.back()} />
      <p onClick={() => router.push("/")}>Home</p>
      <main onClick={() => router.push("/family-tree")}>Family tree</main>
      <main onClick={() => router.push("/about")}>About</main>
    </div>
  );
}

export default Navbar;
