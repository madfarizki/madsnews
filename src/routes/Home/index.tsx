import { Layout } from "antd";
import { Hero, Highlight, News } from "./sections";
import Layouts from "@/components/Layouts";

function Home() {
  return (
    <Layouts>
      <Layout className="bg-white">
        <div className="w-full flex flex-col justify-center align-middle max-w-[1240px] mx-auto">
          <Hero />
          <Highlight />
          <News />
        </div>
      </Layout>
    </Layouts>
  );
}

export default Home;
