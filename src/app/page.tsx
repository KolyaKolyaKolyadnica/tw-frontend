"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Main() {
  const router = useRouter();

  return (
    <>
      <Header />
      <Button
        variant={"secondary"}
        className="hover:bg-gray-400"
        onClick={() => router.push("/app")}
      >
        Go to the dashboard
      </Button>

      <div className="flex flex-col items-center border-4 border-gray-800 h-250 mr-12 ml-12">
        <Link href="/MainTabs ">MainTabs</Link>
        <Link href="/QrCodeGenerator">QrCodeGenerator</Link>
      </div>
      <Footer />
    </>
  );
}
