import { Layout } from "antd";

const { Content } = Layout;

function Hero() {
  return (
    <Content className="py-12">
      <div className="w-full sm:py-16 xs:py-8 py-12 sm:px-16 px-6 bg-gray-100 rounded-xl">
        <div className="text-center md:px-56">
          <h1 className="text-lg text-gray-500 font-bold tracking-widest">WELCOME TO MADSNEWS</h1>
          <p className="text-2xl md:text-4xl mt-2 font-bold text-neutral-dark">
            The best place to read the latest{" "}
            <span className="text-primary-dark font-bold">news</span> and{" "}
            <span className="text-primary-dark font-bold">articles</span> from around the{" "}
            <span className="text-primary-dark font-bold">world</span>.
          </p>
        </div>
      </div>
    </Content>
  );
}

export default Hero;
