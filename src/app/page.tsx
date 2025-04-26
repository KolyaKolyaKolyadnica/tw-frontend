"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  return (
    <div className="">
      <Button onClick={() => router.push("/app")}>Go to the dashboard</Button>
    </div>
  );
}
