import Image from "next/image";
import mythicplus from "../assets/mythicplus.webp";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Affix from "@/components/Affix";

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-between p-2">
      <section className="flex gap-6 justify-center mt-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl">Welcome to</h1>
          <span className="text-green-600 text-7xl font-semibold">
            Keystone!
          </span>
          <Separator />
          <p className="text-start ">
            The best way to search and track anything related to mythic+
          </p>

          <Button asChild variant="default">
            <Link href="/runs">Get Started!</Link>
          </Button>
        </div>
        <div>
          <Separator orientation="vertical" />
        </div>
        <Image
          className="rounded-md"
          src={mythicplus}
          alt="mythic+"
          width={400}
          height={400}
        />
      </section>
      <section className="flex flex-col gap-4 items-center justify-centermt-6 min-w-full mt-4">
        <Separator />
        <h2>Weekly affixes</h2>
        <Affix />
      </section>
    </main>
  );
}
