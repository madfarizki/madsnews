import { Card as CardComponent, Col } from "antd";

const { Meta } = CardComponent;

function Card() {
  return (
    <Col span={6}>
      <CardComponent
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }>
        <div className="text-sm text-gray-600 mb-2">CNN • 12 May 2024</div>
        <Meta
          title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur asperiores tempore quaerat."
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ut, a, error facere, quos eligendi culpa soluta harum hic exercitationem nam porro."
        />
      </CardComponent>
    </Col>
  );
}

export default Card;
