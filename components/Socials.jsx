"use client";
import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";
import React from "react";
import Link from "next/link";

const icons = [
  {
    path: "https://github.com/gauravjagwani",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.linkedin.com/in/gaurav-jagwani-4ab67a1aa/",
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} className={`${iconStyles}`}>
            <div>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
