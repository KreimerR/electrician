import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";

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
      className={`${roboto.variable} h-full antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
