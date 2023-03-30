"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "../Global/SectionTitle";

export type ProjectsProps = {
  projects: any[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="pt-32">
      <SectionTitle title="our latest projects" viewMoreUrl="/projects" />

      <div className="mt-8">
        <div className="grid grid-flow-row grid-cols-4 gap-6">
          {projects.map((project, index: number) => {
            return (
              <Link
                href={"/projects/" + project.node.slug}
                key={index}
                className="project-image"
              >
                <Image
                  src={project.node.imagePath}
                  alt={project.node.title}
                  width={240}
                  height={240}
                  className="rounded-lg min-w-full min-h-full bg-cover bg-center"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
