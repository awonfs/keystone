import Image from "next/image";
import mythicplus from "../assets/mythicplus.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <section className="flex gap-6 justify-center mt-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl">Welcome to</h1>
          <span className="text-green-600 text-7xl font-semibold">
            Keystone!
          </span>
          <p className="text-start ">
            The best way to search and track anything related to mythic+
          </p>
          <Button asChild variant="default">
            <Link href="/runs">Get Started!</Link>
          </Button>
        </div>
        <Image
          className="rounded-md"
          src={mythicplus}
          alt="mythic+"
          width={400}
          height={400}
        />
      </section>
    </main>
  );
}
