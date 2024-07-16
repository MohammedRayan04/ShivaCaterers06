import React from "react";
import Image from "next/image";
import { heroDark } from "@/assets/images";
import Link from "next/link";
import styles from "./Hero.module.css"; // Adjust path if necessary

const Hero = () => {
  return (
    <section>
      <div className="bg-rose-50 flex-col flex-row mt-1">
        {/* Hero Content */}
        <div className="bg-rose-50 relative h-screen lg:flex-1 flex flex-col justify-center items-center cursive-font">
          <Image
            src={heroDark}
            layout="fill"
            objectFit="cover"
            alt="Hero Background"
            priority
          />
          <div
            className="absolute inset-0 bg-black whitespace-nowrap bg-transparent flex flex-col gap-16 items-center justify-self-start text-white text-center px-9"
            style={{ paddingTop: "18%" }}
          >
            <h1
              className={`text-5xl md:text-5xl mb-4 font-bold text-center justify-items-start ${styles["hero-title"]}`}
            >
              Welcome to
            </h1>
            <h1
              className={`text-4xl md:text-7xl mb-4 font-bold text-center font-serif ${styles["hero-subtitle"]}`}
            >
              SHIVA CATERERS
            </h1>

            <h2
              className={`text-3xl md:text-4xl mb-4 whitespace-nowrap font-semibold ${styles["dancing-script-custom"]}`}
            >
              Taste is the sign of life!!
            </h2>
            <Link
              href="/menu"
              className="bg-rose-500 text-black gap-36 font-bold py-3 px-6 rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out"
            >
              Explore our Menus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
