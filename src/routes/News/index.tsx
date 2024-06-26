import { Layouts } from "@/components/index";
import { useFetchAllNews } from "@/utils/api/useNews";
import Card from "@/components/Card";
import { Col, Layout, Pagination, Row, Skeleton } from "antd";
import { useMemo, useState } from "react";

function News() {
  const [page, setPage] = useState(1);
  const pageSize = 20;

  const { data, isFetching } = useFetchAllNews({
    q: "indonesia",
    pageSize: pageSize,
    page: page,
  });

  const news = useMemo(() => data?.data?.articles, [data]);

  const onChange = (value: number) => {
    setPage(value);
  };

  return (
    <Layouts>
      <Layout className="bg-white my-10">
        <div className="w-full flex flex-col justify-center align-middle max-w-[1240px] mx-auto max-sm:px-8">
          <h1 className="text-4xl font-bold">All News</h1>
          {isFetching ? (
            <Row gutter={[46, 26]} className="mt-8">
              {Array.from({ length: 12 }).map((_, idx) => (
                <Col xs={24} sm={12} md={8} lg={6} key={idx}>
                  <Skeleton.Image active className="mb-4" style={{ height: "200px" }} />
                  <Skeleton active />
                </Col>
              ))}
            </Row>
          ) : (
            <>
              <Row gutter={[46, 26]} className="mt-8">
                {news ? (
                  news?.map((item, idx) => <Card item={item} key={idx} />)
                ) : (
                  <div className="text-center w-full text-xl font-bold">Sorry, no data found!</div>
                )}
              </Row>
              <div className="w-full flex justify-center mt-8">
                <Pagination
                  defaultCurrent={page}
                  total={data?.data?.totalResults}
                  onChange={onChange}
                  pageSize={pageSize}
                  showSizeChanger={false}
                />
              </div>
            </>
          )}
        </div>
      </Layout>
    </Layouts>
  );
}

export default News;
