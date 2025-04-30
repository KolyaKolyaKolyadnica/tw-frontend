import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/logo.png"

export default function Footer() {
    const [expanded, setExpanded] = useState(true);
    const year = new Date

    return (
        <>

            <footer className={`
            flex justify-between p-2 fixed bottom-0 left-0 w-full border-t border-black
            bg-gray-400   items-center 
            transform transition-transform duration-300
            ${expanded ? "translate-y-0" : "translate-y-full"}
            `}>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="
                    border border-black
                       absolute right-[5%] top-0   z-50
                      -translate-y-full  w-12 h-6
                      bg-gray-600 text-yellow-200 text-xs
                      rounded-t-md
                      flex items-center justify-center
                       shadow-lg ">
                    {expanded ? "▼" : "▲"}</button>
                <Image
                    src={logo}
                    alt="Logo"
                    width={30}
                    height={30}
                    className="border border-black rounded bg-yellow-200 "
                />
                <span >{year.getFullYear()}</span>

                <Link href="#..." className="border border-black rounded-sm bg-gray-600 pl-1 pr-1">О нас</Link>
            </footer >
        </>
    );
}