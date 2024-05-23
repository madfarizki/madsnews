import { Article } from "@/utils/fetcher/news";
import { formatDate } from "@/utils/formatDate";
import { getPlaceholderImage } from "@/utils/getPlaceholderImage";
import { truncateText } from "@/utils/truncateText";
import { Card as CardComponent, Col } from "antd";

const { Meta } = CardComponent;

type Props = Article;

function Card({ item }: { item: Props }) {
  const { title, description, urlToImage, source, publishedAt, url } = item;

  const { name } = source;

  const shortDesc = truncateText(description ?? "", 150);
  const shortTitle = truncateText(title ?? "", 35);

  const handleItemClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Col span={6} onClick={handleItemClick}>
      <CardComponent
        hoverable
        style={{ width: 300, height: 420 }}
        cover={
          <img
            alt="example"
            src={urlToImage ?? getPlaceholderImage()}
            className="w-auto h-[200px] object-cover"
          />
        }>
        <div className="text-sm text-gray-600 mb-2">
          {name} • {formatDate(publishedAt)}
        </div>
        <Meta
          title={<h1 className="font-bold text-2xl text-wrap">{shortTitle}</h1>}
          description={shortDesc}
        />
      </CardComponent>
    </Col>
  );
}

export default Card;
