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

const SUPPORTED_LANGS = ["en", "he", "ru"] as const

type Lang = (typeof SUPPORTED_LANGS)[number]

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params

  if (!SUPPORTED_LANGS.includes(lang as Lang)) {
    throw new Error("Unsupported language")
  }

  const safeLang = lang as Lang

  return (
    <html
      lang={safeLang}
      dir={safeLang === "he" ? "rtl" : "ltr"}
      className={`${roboto.variable} antialiased overflow-x-hidden`}
    >
      <body>
        <DataProvider lang={safeLang}>
          <Header />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
