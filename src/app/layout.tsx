import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { User2 } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Post It",
  description: "Show the world what you're thinking",
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
          <header className="p-5 flex items-center justify-between border-b-2">
            <div className="text-3xl font-bold">Post It</div>
            <nav className="flex gap-3 items-center">
              <Link href="/create">
                <Button variant="outline">Create</Button>
              </Link>
              <Link href="/profile">
                <Button size="icon" variant="ghost">
                  <User2 />
                </Button>
              </Link>
              <ThemeToggler />
            </nav>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
