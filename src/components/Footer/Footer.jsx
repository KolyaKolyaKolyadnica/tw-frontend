import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/logo.png";

export default function Footer() {
  const year = new Date();

  return (
    <footer className="flex items-center justify-between p-2 w-full bg-gray-400">
      <Image
        src={logo}
        alt="Logo"
        width={30}
        height={30}
        className="border border-black rounded bg-yellow-200 "
      />
      <span>{year.getFullYear()}</span>

      <Link
        href="/about"
        className="border border-black rounded-sm bg-gray-600 pl-1 pr-1"
      >
        О нас
      </Link>
    </footer>
  );
}
