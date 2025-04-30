import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import LoginPage from "@/app/login/page"

import logo from "@/../public/logo.png"

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <header className="border-b border-black sticky pb-[4px] top-0 z-1 bg-gray-400">
                <div className="border-b border-l border-r border-black w-8/9 space-x-4 rounded-bl-lg rounded-br-lg px-5 py-2 mx-auto flex justify-between items-center bg-black/20">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={50}
                        height={50}
                        className="border border-black rounded bg-yellow-200 "
                    />
                    <input
                        type="text"
                        placeholder="Поиск..."
                        className="w-3/4 px-2 py-1 rounded border border-gray-300"
                    />
                    <Button variant="secondary" onClick={() => setModalOpen(!modalOpen)}>Войти1</Button>
                    <Link href="/login">Войти2</Link>

                </div>
            </header>
            {modalOpen &&
                <LoginPage className=" 
                 absolute
                 top-1/2 left-1/2
                 transform -translate-x-1/2 -translate-y-1/2
                 border border-black
                 z-50
                "/>
            }
        </>
    );
}
