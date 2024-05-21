import { Layout, Menu, Button, Drawer } from "antd";
import { useEffect, useState } from "react";
const { Header: Navbar } = Layout;

function Header() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  return (
    <Navbar className=" w-full bg-blue-900">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-white text-2xl font-bold">Mads News</h2>
        {!isMobile ? (
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            theme="dark"
            className="bg-transparent">
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Articles</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        ) : (
          <>
            <Button
              type="primary"
              icon=""
              onClick={showDrawer}
              className="bg-blue-700 border-none"
            />
            <Drawer
              title="Menu"
              placement="right"
              closable={true}
              onClose={onClose}
              visible={visible}>
              <Menu mode="vertical" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Articles</Menu.Item>
                <Menu.Item key="3">Contact</Menu.Item>
              </Menu>
            </Drawer>
          </>
        )}
      </div>
    </Navbar>
  );
}

export default Header;
