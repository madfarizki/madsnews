import { Button, Flex, Image } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Article } from "@/utils/fetcher/news";
import { getPlaceholderImage } from "@/utils/getPlaceholderImage";
import { formatDate } from "@/utils/formatDate";
import { truncateText } from "@/utils/truncateText";

type Props = Article;

function Card({ item }: { item: Props }) {
  const { title, description, urlToImage, source, publishedAt, url } = item;

  const { name } = source;

  const handleItemClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Flex className="justify-center items-center rounded-xl flex-col md:flex-row" gap={60}>
        <Image
          src={urlToImage ?? getPlaceholderImage()}
          alt="highlight"
          width="100%"
          height="400px"
          className="rounded-xl w-[80px] object-cover"
        />
        <div className="w-11/12">
          <div className="text-lg text-gray-600 font-bold">
            {name} • {formatDate(publishedAt)}
          </div>
          <h1 className="md:text-5xl font-bold !leading-tight mt-2">{truncateText(title, 50)}</h1>
          <p className="text-2xl mt-4">{description}</p>
          <Button
            type="primary"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            size="large"
            className="bg-primary mt-4"
            onClick={handleItemClick}>
            Read More
          </Button>
        </div>
      </Flex>
    </div>
  );
}

export default Card;
