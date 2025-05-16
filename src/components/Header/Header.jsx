import React from "react";
import style from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CustomSidebar from "../CustomSidebar/CustomSidebar";

import logo from "@/../public/logo.png";

export default function Header() {
  return (
    <header
      // className={style.header} // это можно удалить
      className="flex items-center justify-between sticky top-0 w-full bg-gray-300/95"
    >
      <div className={style.brand}>
        <Image
          src={logo}
          alt="Logo"
          width={40}
          height={40}
          className={style.brand_image}
        />
        <p className={style.brand_brandName}>
          QR Code Generator{" "}
          <span className={style.brand_brandName_span}>
            Create your QR Code for free
          </span>
        </p>
      </div>

      <div className={style.meny}>
        <Button asChild size="header" variant="header_link">
          <Link href="login">Login</Link>
        </Button>
        <Button asChild size="header" variant="header_button">
          <Link href="register">SING UP</Link>
        </Button>

        <CustomSidebar />
      </div>
    </header>
  );
}
