"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          text="Explore Cars"
          containerStyles="bg-primary  rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/civic-black.png"
            alt="hero"
            fill
            className="object-contain block dark:hidden"
          />
          <Image
            src="/civic.png"
            alt="hero"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
