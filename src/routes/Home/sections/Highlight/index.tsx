import { Button, Carousel, Flex, Image, Layout } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Content } = Layout;

function Highlight() {
  return (
    <Content className="my-10">
      <Carousel arrows autoplay={true}>
        <div>
          <Flex className="justify-center items-center rounded-xl flex-col md:flex-row" gap={60}>
            <Image
              src="https://source.unsplash.com/random"
              alt="highlight"
              width="100%"
              height="400px"
              className="rounded-xl w-[80px] object-cover"
            />
            <div className="w-11/12">
              <div className="text-lg text-gray-600 font-bold">CNN • 12 May 2024</div>
              <h1 className="md:text-5xl font-bold !leading-tight mt-2">
                Where To Watch "John Wick: Chapter 4"
              </h1>
              <p className="text-2xl mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quos. Quos, quas
                consectetur adipisicing elit. Quas, quos. Quos, quas consectetur adipisicing elit.
                Quas, quos. Quos, quas consectetur adipisicing elit. Quas, quos. Quos, quas
                consectetur ...
              </p>
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                size="large"
                className="bg-primary mt-4">
                Read More
              </Button>
            </div>
          </Flex>
        </div>
      </Carousel>
    </Content>
  );
}

export default Highlight;
