import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Portfolio",
  description: "My professional journey as a software engineer.",
};

const ExperienceTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-bold mb-2">
    {children}
  </h3>
);

const ExperienceText = ({ children }: { children: React.ReactNode }) => (
  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
    {children}
  </p>
);

const ExperienceImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="grid grid-cols-2 gap-4">
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    />
  </div>
);

export default function ExperiencePage() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <ExperienceTitle>
            Senior Full Stack Software Engineer at HSBC Technologies India
          </ExperienceTitle>

          <ExperienceText>
            Promoted to Senior Engineer for consistently delivering high-impact
            features and taking ownership across both frontend and backend
            systems. Led development of complex React applications.
          </ExperienceText>

          <ExperienceText>
            Took additional responsibilities including mentoring junior
            engineers, reviewing code for quality and performance, and
            contributing to technical design decisions for scalable
            microservices.
          </ExperienceText>

          <ExperienceImage src="/images/hsbc3.jpg" alt="HSBC Office" />
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <ExperienceTitle>
            Full Stack Software Engineer at HSBC Technologies India
          </ExperienceTitle>
          <ExperienceText>
            Supported containerization efforts using Docker and aided in the
            deployment orchestration with Kubernetes, acquiring foundational
            knowledge in modern DevOps practices.
          </ExperienceText>
          <ExperienceImage src="/images/hsbc.png" alt="HSBC Work Environment" />
        </div>
      ),
    },
    {
      title: "Mid 2023",
      content: (
        <div>
          <ExperienceTitle>
            Started as a Trainee Software Engineer at HSBC Technologies India
          </ExperienceTitle>
          <ExperienceText>
            Contributed to the development of microservices architecture using
            Spring Boot framework, gaining practical experience in software
            engineering principles and best practices.
          </ExperienceText>
          <ExperienceImage src="/images/hsbc2.png" alt="HSBC Technologies" />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
