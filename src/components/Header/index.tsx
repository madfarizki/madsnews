import { Layout, Menu, Button, Drawer } from "antd";
import { useEffect, useState } from "react";
const { Header: Navbar } = Layout;
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function Header() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [dark, setDark] = useState(false);

  const history = useHistory();

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      label: "Home",
      key: "/",
      path: "/",
    },
    {
      label: "News",
      key: "/news",
      path: "/news",
    },
  ];

  return (
    <Navbar className="w-full bg-transparent px-10 md:px-32 flex justify-between items-center">
      <h2 className="text-dark text-2xl font-bold w-40 ">
        Mads<span className="text-primary font-bold">News</span>
      </h2>

      {!isMobile ? (
        <>
          <Menu
            mode="horizontal"
            selectedKeys={[history.location.pathname]}
            theme="light"
            className="bg-transparent flex justify-center items-center w-full">
            {items.map((item) => (
              <Menu.Item key={item.key} onClick={() => history.push(item.path)}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
          <div className="flex space-x-4">
            <FacebookOutlined className="text-dark text-2xl" />
            <TwitterOutlined className="text-dark text-2xl" />
            <InstagramOutlined className="text-dark text-2xl" />
          </div>
        </>
      ) : (
        <>
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            className="bg-blue-700 border-none"
          />
          <Drawer title="Menu" placement="right" closable={true} onClose={onClose} open={visible}>
            <Menu mode="vertical" selectedKeys={["home"]}>
              {items.map((item) => (
                <Menu.Item key={item.key} onClick={() => history.push(item.path)}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </Drawer>
        </>
      )}
    </Navbar>
  );
}

export default Header;
