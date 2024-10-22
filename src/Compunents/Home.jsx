import React from "react";
// import {  Image } from 'antd';
import Hero from "./Hero";
import OurProducts from "./OurProducts";
export default function Home() {
  return (
    <>
      <div className="w-full h-screen relative">
        <img
          className="w-full absolute h-screen"
          src="https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1728864000&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=JvTKx2ijPxP6~UidVVmwYngQxJah8tccx9UITJjrjlWtePUwugicOfUKU5wacwNaC-3zefopwaNSc1C-2JympGmX~nGJ4w~4KGNiuh8L5olwDg70eVCUAXl1YuPSwKTKRU1N2FZFwHy4kpQjgoyQncOhfpGI~OCqoB19aiqnYcz2zViDiBVbKOvpl2ILLcUCn-iDjpudv2HWuK7MtJUNX5o2psiLU9DEYFJZ02m1An7d20kiZq0y9JoxAU6mBPwnJwOnUBPYh0O8DHXn~uZjTHia0ypY6U3-Hyk~rmGvpFPTwaH91C4uYwauIl9oVWE84TUCAKyZG6rB3Qd90ySxvA__"
          width="337"
          height="236"
        />
        <div className="w-1/3 h-96 bg-yellow-200 p-20 absolute right-32 top-48 ">
          <h1 className="font-mono font-bold">New Arrival</h1>
          <h1 className="font-bold  text-5xl text-amber-700 ">Discover Our</h1>
          <h1 className="font-bold  text-5xl text-amber-700 ">
            New Collection
          </h1>
          <br />
          <p className="font-normal">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
          <br />
          <button className="p-3 rounded-none text-white bg-amber-700 mb-3 px-10">
            BUY NOW
          </button>
        </div>
      </div>

      <Hero />

      <OurProducts />
    </>
  );
}
