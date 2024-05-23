import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

function Footer() {
  return (
    <AntFooter className="bg-blue-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-white">
          © {new Date().getFullYear()} MadsNews. Created by{" "}
          <a href="https://madfariz.my.id/" target="_blank" className="text-white underline">
            Ahmad Alfarizki
          </a>{" "}
          made with 💖
        </p>
      </div>
    </AntFooter>
  );
}

export default Footer;
