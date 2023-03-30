import { Container } from "./Container";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Overlay } from "./Overlay";

export const Layout = ({ children }: any) => {
  return (
    <main>
      <Overlay />
      <div className="z-10">
        <Header />
        <Container>{children}</Container>
        <Footer />
      </div>
    </main>
  );
};
