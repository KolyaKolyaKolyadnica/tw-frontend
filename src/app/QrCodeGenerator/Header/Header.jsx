import React from "react";
import style from "./Header.module.css"
import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

import logo from "@/../public/logo.png"
import Sidebar from "../Sidebar/Sidebar"

export default function Header() {

    return (
        <header className={style.header}>
            <div className={style.brand}>
                <Image
                    src={logo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className={style.brand_image}
                />
                <p className={style.brand_brandName}>QR Code Generator <span className={style.brand_brandName_span}>Create your QR Code for free</span></p>
            </div>

            <div className={style.meny}>
                <Button asChild size="header" variant="header_link">
                    <Link href="#">Login</Link>
                </Button>
                <Button asChild size="header" variant="header_button">
                    <Link href="#">SING UP</Link>
                </Button>
                <Sidebar />
            </div>
        </header>
    );
}
