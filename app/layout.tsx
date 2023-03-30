import "./globals.css";

export const metadata = {
  title: "Code Studio | A world-class digital agency",
  description:
    "CodeStudio is a world-class digital agency that specializes in web design, web development, mobile app development, e-commerce solutions, digital marketing, and branding. Our team of skilled professionals is dedicated to providing customized solutions that exceed our clients' expectations. We collaborate with businesses of all sizes to deliver exceptional results that drive growth and success in the digital landscape. With a focus on innovation and technology, we create stunning digital experiences that transform businesses and drive results. Contact us today to learn how we can help your business succeed in the digital age",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="script-src 'none'"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
