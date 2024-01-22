import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

function Navbar() {
  const router = useRouter();
  return (
    <div className="bg-blue-300/50 h-16 w-screen text-black flex justify-center] justify-between items-center px-4 font-bold">
      <IoArrowBack
        size={30}
        color="darkblue"
        className="cursor-pointer"
        onClick={() => router.back()}
      />
      <p onClick={() => router.push("/")} className="cursor-pointer">
        Home
      </p>
      <main
        onClick={() => router.push("/family-tree")}
        className="cursor-pointer"
      >
        Family tree
      </main>
      <main onClick={() => router.push("/about")} className="cursor-pointer">
        About
      </main>
    </div>
  );
}

export default Navbar;
