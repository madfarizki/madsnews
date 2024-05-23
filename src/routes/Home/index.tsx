import { Layout } from "antd";
import { Footer, Header } from "@/components/index";
import { Hero, Highlight, News } from "./sections";

function Home() {
  return (
    <Layout className="bg-white">
      <Header />
      <div className="w-full flex flex-col justify-center align-middle max-w-[1240px] mx-auto">
        <Hero />
        <Highlight />
        <News />
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
