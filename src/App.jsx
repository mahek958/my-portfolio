import { Layout, Menu, Button } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Projects</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: "100px 50px", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px" }}>
          Hi, I'm Mahek 👋
        </h1>

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          React Developer | Cybersecurity Learner
        </p>

        <Button
          type="primary"
          size="large"
          style={{ marginTop: "30px" }}
        >
          View My Work
        </Button>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © 2026 My Portfolio
      </Footer>
    </Layout>
  );
}

export default App;
