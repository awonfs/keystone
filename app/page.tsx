"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import mythicplus from "../assets/mythicplus.webp";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Affix from "@/components/Affix";

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-between p-2">
      <section className="flex gap-6 justify-center my-4">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-7xl">Welcome to</h1>
          <span className="text-green-600 text-7xl font-semibold">
            Keystone!
          </span>
          <Separator />
          <p className="text-start ">
            The best way to search and track anything related to mythic+
          </p>
          <Button asChild variant="default">
            <Link href="/search-characters">Get Started!</Link>
          </Button>
        </motion.div>

        <Separator orientation="vertical" />

        <div>
          <Image
            className="rounded-md"
            src={mythicplus}
            alt="mythic+"
            width={350}
            height={350}
          />
        </div>
      </section>
      <Separator />
      <section className="flex flex-col gap-4 items-start justify-center mt-2 w-2/4">
        <Affix />
      </section>
    </main>
  );
}
