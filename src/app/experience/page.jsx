import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="content">
      <div className="text-center">
        <Image
          src={"/images/squidward.jpg"}
          width={278}
          height={278}
          alt="reza"
          className="w-full lg:w-96 rounded-md mb-10 mt-20 m-auto"
        />
        <h1 className="text-3xl">Still Process ...</h1>
      </div>
    </div>
  );
}
