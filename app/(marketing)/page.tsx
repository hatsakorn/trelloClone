import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/Heebo-Regular.ttf",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
      </div>
      <div
        className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
      >
        Taskify
      </div>
    </Link>
  );
};

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn("flex items-center justify-center flex-col")}>
        <div className="mb-4 flex items-center border shadow p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward
        </div>
        <div className="text-lg md:text-xl px-4 py-4 w-fit">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum odio
          voluptatum pariatur non maxime distinctio repellendus ad aliquid illo
          laborum.
        </div>
        <Button className="mt-6" size="lg">
          <Link href="/sign-up">Get Taskify for free</Link>
        </Button>
      </div>
    </div>
  );
}

export default MarketingPage;
