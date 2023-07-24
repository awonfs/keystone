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
        <motion.p
          className="mx-1"
          variants={variants}
          initial="hidden"
          animate="visibleAfterTitle"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          eum, cumque saepe aut officiis, maiores quam nulla nisi voluptate iure
          repellat? Earum at deleniti, modi dolor corrupti ratione magnam
          provident incidunt iusto, sit reiciendis similique. Accusantium cum
          nesciunt atque quod et inventore nulla nihil officia iure aspernatur!
          Deleniti, repellendus? Similique?
        </motion.p>
      </section>
    </main>
  );
}

export default AboutPage;
