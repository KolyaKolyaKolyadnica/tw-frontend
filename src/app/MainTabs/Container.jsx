import React, { Children, useState } from "react";

export default function Header_2({ children }) {

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-gray-200 p-1 flex justify-end">
                <div className="bg-gray-400 pl-2 pr-2 rounded-full">Header1</div>
            </div>

            <div className="flex  justify-center flex-grow mb-2">
                {children}
            </div>

            <div className="bg-gray-300">FooterMainTam</div>
        </div>
    );
}