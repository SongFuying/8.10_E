import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav>
            <NavBar />
          </nav>
          <main className="flex justify-start space-x-4">{children}</main>
          <footer className="flex justify-center items-center md:pt-[150px] pt-[70px]">
            <small className="text-sm font-medium leading-none">
              @2024 footer test test
            </small>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
