import { Carousel, Flex, Layout, Skeleton } from "antd";
import { useFetchAllHighlightNews } from "@/utils/api/useNews";
import { useMemo } from "react";
import Card from "./Card";

const { Content } = Layout;

function Highlight() {
  const { data, isFetching } = useFetchAllHighlightNews({ q: "us", pageSize: 3, page: 2 });

  const news = useMemo(() => data?.data?.articles, [data]);

  if (isFetching)
    return (
      <Content className="my-10">
        <Flex className="justify-center items-center rounded-xl flex-col md:flex-row" gap={60}>
          <div className="w-full">
            <Skeleton.Image active style={{ height: "400px" }} />
          </div>
          <Skeleton active paragraph={{ rows: 10 }} />
        </Flex>
      </Content>
    );

  return (
    <Content className="my-10">
      <Carousel arrows autoplay={true}>
        {news?.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </Carousel>
    </Content>
  );
}

export default Highlight;
