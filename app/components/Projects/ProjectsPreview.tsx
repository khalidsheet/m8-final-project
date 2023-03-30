"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "../Global/SectionTitle";

export type ProjectsProps = {
  projects: any[];
  fullPage?: boolean;
};

export const ProjectsPreview = ({
  projects,
  fullPage = false,
}: ProjectsProps) => {
  return (
    <div className="mt-32">
      <h1 className="text-center text-title text-2xl font-bold">
        View our wide collection of projects
      </h1>

      <div className="mt-8">
        <div className="grid grid-flow-row grid-cols-4 gap-6">
          {projects.map((project, index: number) => {
            return (
              <div
                key={index}
                className="hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-[#fff00030] rounded-lg"
              >
                <Link
                  href={"/projects/" + project.node.slug}
                  className="project-image"
                >
                  <Image
                    src={project.node.imagePath}
                    alt={project.node.title}
                    width={240}
                    height={240}
                    className="rounded-lg min-w-full min-h-full bg-contain project-image"
                  />
                  <p className="text-gray-300 mt-3 text-title">
                    {project.node.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
