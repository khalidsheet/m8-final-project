import client from "@/app/client";
import { Layout } from "@/app/components/Global/Layout";
import { FIND_SINGLE_PROJECT_DETAILS } from "@/app/queries";
import Head from "next/head";
import Image from "next/image";

async function getProjectDetails(slug: string) {
  const {
    data: { project },
  } = await client.query({
    query: FIND_SINGLE_PROJECT_DETAILS,
    variables: {
      where: { slug },
      stage: "PUBLISHED",
    },
  });

  return project;
}

export async function generateMetadata({ params }: any) {
  const { projectSlug: slug } = params;
  const project = await getProjectDetails(slug);
  return {
    title: project?.title,
    description: project?.description?.substring(0, 155) + "...",
  };
}

export default async function ProjectPreview(props: any) {
  const { projectSlug: slug } = props.params;
  const project = await getProjectDetails(slug);

  return (
    <Layout>
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className="mt-16">
        <div className="mt-16 mb-8 w-full h-full md:h-[480px] aspect-auto overflow-hidden rounded-lg bg-center bg-cover">
          <Image
            src={project.imagePath}
            width={1024}
            height={1024}
            alt={project.title}
            className="rounded-lg bg-cover w-full"
            quality={100}
            loading="eager"
            priority
          />
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center space-x-2">
              <p className="text-gray-400">By</p>
              <Image
                src={project.publishedBy.picture}
                width={24}
                height={24}
                alt={project.title}
                className="rounded-lg bg-cover"
                quality={100}
                loading="eager"
                priority
              />
              <p className="text-white text-sm">{project.publishedBy.name}</p>
            </div>
            <div className="dot w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
            <p className="text-yellow-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(Date.parse(project.createdAt))}
            </p>
          </div>
          <h1 className="text-4xl font-bold">{project.title}</h1>
        </div>
        <p
          className="mt-8 text-lg text-gray-200"
          dangerouslySetInnerHTML={{
            __html: project.description.replace(/\r?\n|\r/g, "<br />").trim(),
          }}
        ></p>
      </div>
    </Layout>
  );
}
