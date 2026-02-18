import { Button } from "antd";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1 style={{ fontSize: "40px" }}>
        Hi, I'm Mahek 👋
      </h1>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        React Developer | Cybersecurity Enthusiast | GATE Aspirant
      </p>

      <Button
        type="primary"
        size="large"
        style={{ marginTop: "30px" }}
      >
        View My Projects
      </Button>
    </div>
  );
}

export default Home;
