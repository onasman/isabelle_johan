import "./_styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "./_components/header";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { token } from "~/lib/sanity.fetch";

const PreviewProvider = dynamic(() => import("~/components/preview-provider"));

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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Header />
        <TRPCReactProvider>
          {draftMode().isEnabled ? (
            <PreviewProvider token={token}>{children}</PreviewProvider>
          ) : (
            children
          )}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
