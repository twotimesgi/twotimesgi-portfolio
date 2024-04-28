import type { Metadata } from "next";
import { Inter, Nunito_Sans, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
export const metadata: Metadata = {
  title: "Luigi Bardella Gerbi",
  description: "Hello👋, I'm Luigi! Since writing my first line of code at 12, I've been captivated by the joy of building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>{children}</body>
    </html>
  );
}
