import Card from "@/components/Card";
import { Button, Col, Layout, Pagination, Row, Skeleton } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useFetchAllNews } from "@/utils/api/useNews";
import { useMemo, useState } from "react";

const { Content } = Layout;

function News() {
  const [page, setPage] = useState(1);

  const { data, isFetching } = useFetchAllNews({
    q: "indonesia",
    pageSize: 12,
    page: page,
  });

  const news = useMemo(() => data?.data?.articles, [data]);

  const onChange = (value: number) => {
    setPage(value);
  };

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
      {isFetching ? (
        <Row gutter={[46, 26]} className="mt-8">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col span={6} key={idx}>
              <Skeleton.Image active className="mb-4" style={{ height: "200px" }} />
              <Skeleton active />
            </Col>
          ))}
        </Row>
      ) : (
        <>
          <Row gutter={[46, 26]} className="mt-8">
            {news?.map((item, idx) => (
              <Card item={item} key={idx} />
            ))}
          </Row>
          <div className="w-full flex justify-center mt-8">
            <Pagination
              defaultCurrent={page}
              total={data?.data?.totalResults}
              onChange={onChange}
              showSizeChanger={false}
            />
          </div>
        </>
      )}
    </Content>
  );
}

export default News;
