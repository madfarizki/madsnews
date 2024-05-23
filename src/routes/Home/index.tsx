import { Layout } from "antd";
import { Hero, Highlight, News } from "./sections";

function Home() {
  return (
    <Layout className="bg-white">
      <div className="w-full flex flex-col justify-center align-middle max-w-[1240px] mx-auto">
        <Hero />
        <Highlight />
        <News />
      </div>
    </Layout>
  );
}

export default Home;
