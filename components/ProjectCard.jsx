"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiMiniChevronDown,
  HiMiniChevronUp,
  HiMiniHeart,
} from "react-icons/hi2";

const ProjectCard = ({ project }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="min-w-[420px] min-h-[500px] p-1">
      <Link href={project.link} target="_blank">
        <img
          src={project.img}
          alt={project.title}
          className="w-full mb-3 h-[220px] bg-contain rounded-lg cursor-pointer hover:bg-black/30"
        />
      </Link>
      <span className="text-[22px] pl-3 pr-4 mt-4 ">{project.title}</span>
      <p className="text-base opacity-70 px-3 mt-2 font-light text-wrap pl-3 pr-4">
        {readMore
          ? project.description
          : project.description.slice(0, 100) + "..."}
        <span
          className="flex items-center cursor-pointer opacity-100"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? (
            <>
              Read less <HiMiniChevronUp size={20} />
            </>
          ) : (
            <>
              Read more <HiMiniChevronDown size={20} />
            </>
          )}
        </span>
      </p>
    </div>
  );
};

export default ProjectCard;
