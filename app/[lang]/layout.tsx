import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { DataProvider } from "@/components/DataProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Electrician",
  description: "Private electrician",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "he" | "en" | "ru" }>
}>) {
  const { lang } = await params

  if (!lang) throw new Error("'lang' has not been received")

  return (
    <html
      lang={lang}
      dir={lang === "he" ? "rtl" : "ltr"}
      className={`${roboto.variable} antialiased overflow-x-hidden`}
    >
      <body>
        <DataProvider lang={lang}>
          <Header />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
