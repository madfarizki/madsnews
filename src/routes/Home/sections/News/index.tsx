import Card from "@/components/Card";
import { Button, Layout, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Content } = Layout;

function News() {
  return (
    <Content className="my-10">
      <Row justify="space-between">
        <h1 className="md:text-4xl font-bold !leading-tight mt-2">Latest News</h1>
        <Button
          type="link"
          className="md:text-xl flex justify-center items-center !leading-tight mt-2">
          Read More
          <ArrowRightOutlined />
        </Button>
      </Row>
      <Row gutter={[46, 26]} className="mt-8">
        <Card />
      </Row>
    </Content>
  );
}

export default News;
