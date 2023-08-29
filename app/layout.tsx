import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/components/providers/modal-provider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord",
  description: "Discord Clone By YUYANG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
          <ThemProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            storageKey="discord-theme"
          >
            <ModalProvider />
            {children}
          </ThemProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
