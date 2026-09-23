import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/layout/header";
import { Footer } from "@/src/layout/footer";

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: [
    "cyrillic",
    "latin",
  ],
  weight: ["400", "700"],
});

const headingFont = Lora({
  variable: "--font-heading",
  subsets: [
    "cyrillic",
    "latin",
  ],
  weight: ["500", "700"],
})

export const metadata: Metadata = {
  title: "Салон Минотавр - музыкальные инструменты, свет и звук в Челябинске",
  description: "Салон музыкальных инструментов Минотавр - индивидуальный подход к каждому клиенту, подбор инструментов и оборудования под любой бюджет. Профессионализм и доставка в разумные сроки",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-800 text-taupe-400">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
