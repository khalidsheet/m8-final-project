import { Container } from "./components/Global/Container";
import { Header } from "./components/Global/Header";
import { Overlay } from "./components/Global/Overlay";
import { Hero } from "./components/Home/Hero";
import { Projects } from "./components/Home/Projects";
import client from "./client";
import { GET_PREVIEW_POSTS } from "./queries";
import { About } from "./components/Home/About";
import { Services } from "./components/Home/Services";
import { Footer } from "./components/Global/Footer";
import { ContactUs } from "./components/Home/ContactUs";

export default async function Home() {
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
    <main>
      <Overlay />
      <div className="z-10">
        <Header />
        <Container>
          <Hero />
          <About />
          <Projects projects={page?.edges} />
          <Services />
          <ContactUs />
        </Container>
        <Footer />
      </div>
    </main>
  );
}
