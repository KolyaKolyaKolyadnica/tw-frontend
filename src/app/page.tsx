"use client";
import { Provider } from "react-redux";
import store from "@/components/redux/store";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import QrCodeSection from "@/components/QrCodeSection/QrCodeSection";

export default function Main() {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center border-4 border-gray-800 h-250 mr-12 ml-12">
        <Link href="/app ">
          <Button variant={"secondary"} className="hover:bg-gray-400">
            Go to the dashboard
          </Button>
        </Link>

        <QrCodeSection />
      </div>
      <Footer />
    </Provider>
  );
}
