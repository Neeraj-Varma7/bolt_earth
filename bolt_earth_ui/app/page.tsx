import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Chargers from "@/components/Chargers";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />
      <Chargers/>
    </main>
  );
}
