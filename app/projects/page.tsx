import { Header } from "../components/Global/Header";
import { Footer } from "../components/Global/Footer";
import { Overlay } from "../components/Global/Overlay";
import { Container } from "../components/Global/Container";
import client from "../client";
import { GET_PREVIEW_POSTS } from "../queries";
import { ProjectsPreview } from "../components/Projects/ProjectsPreview";
import { Layout } from "../components/Global/Layout";

export default async function Projects() {
  const {
    data: { page },
  } = await client.query({
    query: GET_PREVIEW_POSTS,
    variables: {
      first: 4,
      stage: "PUBLISHED",
      orderBy: "createdAt_DESC",
    },
  });

  return (
    <Layout>
      <ProjectsPreview projects={page?.edges} />
    </Layout>
  );
}
