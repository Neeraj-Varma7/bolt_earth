import Sidebar from "@/components/Sidebar";
import Chargers from "@/components/Chargers";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />
      <Chargers />
    </main>
  );
}
