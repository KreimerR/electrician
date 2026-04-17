import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContentProvider } from "@/components/ContentProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hashmalay",
  description: "Private electrician",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params

  if (!lang) throw new Error("'lang' has not been received")

  return (
    <html
      lang={lang}
      className={`${roboto.variable} antialiased`}
      data-scroll-behaviour="smooth"
    >
      <body>
        <ContentProvider lang={lang}>
          <Header />

          <div>
            {children}
          </div>

          <Footer />
        </ContentProvider>
      </body>
    </html>
  );
}
