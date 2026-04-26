
import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { SITE_URL } from "@/lib/config/site";
// import Chatbot from "@/components/common/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Digital Marketing Agency India | SocialMoon — Grow. Engage. Conquer.",
    template: "%s | SocialMoon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      {/* <Chatbot /> */}
    </>
  );
}
