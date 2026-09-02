import "./styles/variables.css";
import "./styles/global.css";
import { Layout } from "./components/Layout/Layout";
import { Carousel } from "./components/Carousel";
import { CarouselContent } from "./components/CarouselContent";
// import { Container } from "./components/Container";

export function App() {
  return (
    <Layout>
      <Carousel/>
      <CarouselContent/>
    </Layout>
  );
}
