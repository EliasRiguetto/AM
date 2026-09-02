import "./styles/variables.css";
import "./styles/global.css";
import { Layout } from "./components/Layout/Layout";
import { Carousel } from "./components/Carousel";

export function App() {
  return (
    <Layout>
      <Carousel/>
    </Layout>
  );
}
