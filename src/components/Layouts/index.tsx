import { Footer, Header } from "@/components/index";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layouts;
