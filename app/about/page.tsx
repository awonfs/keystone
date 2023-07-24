"use client";
import { motion } from "framer-motion";

function AboutPage() {
  const words = [
    "About",
    <span key="keystone" className="text-green-500">
      Keystone
    </span>,
    "and",
    <span key="me" className="text-yellow-400">
      Me
    </span>,
  ];

  const delayPerWord = 0.5; // Delay in seconds per word
  const totalDelay = words.length * delayPerWord; // Total delay for the title

  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * delayPerWord,
      },
    }),
    visibleAfterTitle: {
      opacity: 1,
      transition: {
        delay: totalDelay,
      },
    },
  };

  return (
    <main className="container flex justify-center mt-6">
      <section className="flex flex-col gap-4 justify-items-start w-3/4">
        <h1>
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={i}
              className="inline-block mx-1 text-5xl font-medium"
            >
              {word}{" "}
            </motion.span>
          ))}
        </h1>
        <div className="flex flex-col gap-2">
          <motion.div
            className="mx-1"
            variants={variants}
            initial="hidden"
            animate="visibleAfterTitle"
          >
            <h2 className="font-semibold">What is Keystone?</h2>
            <p>
              <span className="text-green-500">Keystone</span> is a open source
              free to use service that allows you to search world of warcraft
              characters and save your own characters to your own profile. This
              is purely a side project and practice for me to learn new
              technologies.
            </p>
            <div className="flex flex-col mt-2 gap-1">
              <h3>
                <span className="text-green-500">Keystone</span> is built with:
              </h3>
              <ul className="flex flex-col gap-1 mt-2">
                <li>
                  <span className="text-blue-500">Frontend & Backend:</span>{" "}
                  Next.js with typecript and the new app directory
                </li>
                <li>
                  <span className="text-yellow-500">ORM:</span> Prisma
                </li>
                <li>
                  <span className="text-red-500">Database & DB provider:</span>{" "}
                  MySQL & Planetscale
                </li>
                <li>
                  <span className="text-purple-500">Authentication:</span> Clerk
                  Authentication
                </li>
                <li>
                  <span className="text-lime-500">Styling & UI:</span> Tailwind
                  & shadcn/UI
                </li>
              </ul>
              <div className="flex flex-col mt-6">
                <h3>
                  <span className="text-yellow-400 text-4xl">
                    The developer:
                  </span>
                </h3>
                <p className="mx-1">
                  I have been a developer for about 1 year now. This is
                  currently a hobby for me and i work full time as a security
                  system installer. I am starting my bachelors degree in
                  computer science this fall so i look forward to get into web
                  development full time in the coming years!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
