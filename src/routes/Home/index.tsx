import { Layout } from "antd";
import { Header } from "@/components/index";
import Hero from "./sections/Hero";

function Home() {
  return (
    <Layout className="bg-white">
      <Header />
      <div className="w-full flex flex-col justify-center align-middle max-w-[1240px] mx-auto">
        <Hero />
      </div>
    </Layout>
  );
}

export default Home;
