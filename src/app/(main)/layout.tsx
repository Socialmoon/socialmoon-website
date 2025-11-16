import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Chatbot from "@/components/common/Chatbot";

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
      <Chatbot />
    </>
  );
}
