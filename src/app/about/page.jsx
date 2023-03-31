import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="content">
      <div className="hero lg:p-20">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-32">
          <Image
            src={"/images/reza-foto.png"}
            width={278}
            height={278}
            alt="reza"
            className="w-full lg:w-96"
          />
          <div>
            <h1 className="lg:text-5xl font-bold leading-relaxed">
              안녕하세요! <br /> (Annyeonghaseyo!)
            </h1>
            <p className="py-6 text-justify">
              Hello! My name is Reza and I enjoy creating things that live on
              the internet. My interest in programming started in 2018 when I
              was still in university and I enjoyed learning programming. Wah
              it&apos;s been a long time!
              <br />
              <br />
              Fast-forward to today, I got quite a lot of experience, for
              example being a Lead of Product Engineer at village development
              activities, besides that I had the opportunity to do an internship
              as a UI UX Designer, I also worked as a UI UX Engineer before
              graduation for 1 year and now I am a Frontend Developer as well as
              a UI UX Designer.
            </p>
            <button className="btn btn-primary">Connect Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
