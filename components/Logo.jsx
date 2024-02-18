import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/GJ_logo.png" width={56} height={54} priority alt=""></Image>
    </Link>
  );
};

export default Logo;
