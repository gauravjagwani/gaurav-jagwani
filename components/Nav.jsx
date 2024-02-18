// import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";

import React from "react";
import { motion } from "framer-motion";
const links = [
  { path: "hero-section", name: "home" },
  { path: "skills-section", name: "Skills" },
  { path: "about-section", name: "about me" },
  { path: "contact-section", name: "contact" },
];
const Nav = ({ containerStyles, linkStyle, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            to={link.path}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            key={index}
            className={`capitalize ${linkStyle} cursor-pointer`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
