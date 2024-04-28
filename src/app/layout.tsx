import "./_styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "./_components/header";

export const metadata = {
  title: "Isabelle & Johan",
  description: "...",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-pt-20 scroll-smooth`}
    >
      <body className="mx-20 mb-40">
        <Header />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
