"use client";
import { Cover } from "@/components/ui/cover";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  const Links = [
    {
      title: "Linkedin",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/rumadi",
    },

    {
      title: "Github",
      icon: (
        <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/rohitumadi",
    },
    {
      title: "Twitter",
      icon: (
        <FaSquareXTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/rohitumadi2000",
    },
  ];
  return (
    <div
      className={`flex sm:flex-row flex-col h-[calc(100vh-64px)] items-center sm:justify-around w-full  `}
    >
      <div className=" m-2 text-center sm:text-left order-1">
        <h1 className="mb-4 text-4xl font-extrabold  sm:text-5xl ">
          <span className="text-white ">Hi, I am Rohit Umadi</span>
        </h1>
        <p className="mb-5 text-base text-white sm:text-lg lg:text-xl">
          <Highlight className="text-black dark:text-white">
            Full-stack developer building scalable production systems with
            React, Next.js, Node.js, Spring Boot, and cloud technologies on GCP.
          </Highlight>
        </p>
        <Cover className="">
          <Link target="_blank" href="/resume/Rohit_Umadi_resume.pdf">
            Download resume to know more
          </Link>
        </Cover>
      </div>

      <div className="relative flex flex-col gap-4 sm:order-1">
        <Image
          className=" object-cover"
          width={400}
          height={400}
          src={"/images/ru.png"}
          alt="DP"
        />
        <FloatingDock items={Links} />
      </div>
    </div>
  );
}
