"use client";
import Image from "next/image";
import React from "react";
// import { Link } from "react-scroll";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
// import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/animations";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Gaurav",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "UI Developer",
        1000,
        "Photographer",
        1000,
        "Web Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

const Hero = () => {
  return (
    <section
      className="py-12 xl:py-24 xl:h-[90vh] h-[30vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none"
      id="hero-section"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col max-w-[600px] justify-center mx-auto xl:mx-0 text-center xl:text-left "
          >
            {/* <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div> */}
            <h1 className="h1 mb-4">
              <span>Hello, I'm </span>
              <br></br>
              <span className="text-primary">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Gaurav",
                    1000,
                    "Web Developer",
                    1000,
                    "UI Developer",
                    1000,
                    "Photographer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Driven by a passion for intuitive User Interfaces, I'm a Workday
              Integration Developer with 1 year of experience building robust
              connections within the Workday ecosystem. Now, I'm eager to
              transition my technical expertise to the frontend, transforming
              data into engaging user experiences.
            </p>
            {/* buttons */}

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              {/* <Link href="#contact-section">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link> */}
              <Link href={process.env.NEXT_PUBLIC_DRIVE_LINK}>
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </motion.div>
          {/* Image */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="hidden xl:flex relative animation-fade-in-left"
          >
            <div className="animation-fade-in-left"></div>
            <Image
              className="relative z-10 -top-8 right-[-6.25rem]"
              src="/dp-edit.png"
              width={900}
              height={690}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
